import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-39a216a3/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Save traveler information
app.post("/make-server-39a216a3/travelers", async (c) => {
  try {
    const body = await c.req.json();
    
    // Generate unique ID
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    
    // Prepare traveler data
    const travelerData = {
      id,
      type: "traveler",
      groupType: body.groupType || "solo",
      groupSize: body.groupSize || "1",
      name: body.name,
      age: body.age,
      gender: body.gender,
      nationality: body.nationality,
      snsId: body.snsId,
      stayDuration: body.stayDuration,
      preferredLocation: body.preferredLocation,
      preferredTime: body.preferredTime,
      travelPurpose: body.travelPurpose,
      interests: body.interests,
      languages: body.languages,
      createdAt: timestamp,
    };
    
    // Save to KV store
    await kv.set(`traveler:${id}`, travelerData);
    
    console.log(`Traveler registered successfully: ${id}`);
    
    return c.json({
      success: true,
      id,
      message: "Traveler information saved successfully",
    });
  } catch (error) {
    console.error("Error saving traveler data:", error);
    return c.json(
      {
        success: false,
        error: `Failed to save traveler information: ${error.message}`,
      },
      500
    );
  }
});

// Save local information
app.post("/make-server-39a216a3/locals", async (c) => {
  try {
    const body = await c.req.json();
    
    // Generate unique ID
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    
    // Prepare local data
    const localData = {
      id,
      type: "local",
      groupType: body.groupType || "solo",
      groupSize: body.groupSize || "1",
      name: body.name,
      age: body.age,
      gender: body.gender,
      snsId: body.snsId,
      location: body.location,
      availableTime: body.availableTime,
      purpose: body.purpose,
      languages: body.languages,
      interests: body.interests,
      experience: body.experience,
      createdAt: timestamp,
    };
    
    // Save to KV store
    await kv.set(`local:${id}`, localData);
    
    console.log(`Local registered successfully: ${id}`);
    
    return c.json({
      success: true,
      id,
      message: "Local information saved successfully",
    });
  } catch (error) {
    console.error("Error saving local data:", error);
    return c.json(
      {
        success: false,
        error: `Failed to save local information: ${error.message}`,
      },
      500
    );
  }
});

// Get traveler by ID
app.get("/make-server-39a216a3/travelers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const traveler = await kv.get(`traveler:${id}`);
    
    if (!traveler) {
      return c.json({ success: false, error: "Traveler not found" }, 404);
    }
    
    return c.json({ success: true, data: traveler });
  } catch (error) {
    console.error("Error fetching traveler data:", error);
    return c.json(
      {
        success: false,
        error: `Failed to fetch traveler information: ${error.message}`,
      },
      500
    );
  }
});

// Get local by ID
app.get("/make-server-39a216a3/locals/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const local = await kv.get(`local:${id}`);
    
    if (!local) {
      return c.json({ success: false, error: "Local not found" }, 404);
    }
    
    return c.json({ success: true, data: local });
  } catch (error) {
    console.error("Error fetching local data:", error);
    return c.json(
      {
        success: false,
        error: `Failed to fetch local information: ${error.message}`,
      },
      500
    );
  }
});

// Get all travelers
app.get("/make-server-39a216a3/travelers", async (c) => {
  try {
    const travelers = await kv.getByPrefix("traveler:");
    return c.json({ success: true, data: travelers, count: travelers.length });
  } catch (error) {
    console.error("Error fetching travelers:", error);
    return c.json(
      {
        success: false,
        error: `Failed to fetch travelers: ${error.message}`,
      },
      500
    );
  }
});

// Get all locals
app.get("/make-server-39a216a3/locals", async (c) => {
  try {
    const locals = await kv.getByPrefix("local:");
    return c.json({ success: true, data: locals, count: locals.length });
  } catch (error) {
    console.error("Error fetching locals:", error);
    return c.json(
      {
        success: false,
        error: `Failed to fetch locals: ${error.message}`,
      },
      500
    );
  }
});

// Admin dashboard - PUBLIC ACCESS (no authentication)
app.get("/make-server-39a216a3/admin/dashboard", async (c) => {
  try {
    console.log("=== ADMIN DASHBOARD REQUEST - PUBLIC ACCESS ===");
    
    // Fetch all data
    const travelers = await kv.getByPrefix("traveler:");
    const locals = await kv.getByPrefix("local:");
    
    console.log(`Fetched ${travelers.length} travelers and ${locals.length} locals`);
    
    // Calculate statistics
    const stats = {
      totalTravelers: travelers.length,
      totalLocals: locals.length,
      totalUsers: travelers.length + locals.length,
      travelersBySolo: travelers.filter((t) => t.groupType === "solo").length,
      travelersByGroup: travelers.filter((t) => t.groupType === "group").length,
      localsBySolo: locals.filter((l) => l.groupType === "solo").length,
      localsByGroup: locals.filter((l) => l.groupType === "group").length,
      travelersByGender: {
        male: travelers.filter((t) => t.gender === "male").length,
        female: travelers.filter((t) => t.gender === "female").length,
        other: travelers.filter((t) => t.gender === "other").length,
      },
      localsByGender: {
        male: locals.filter((l) => l.gender === "male").length,
        female: locals.filter((l) => l.gender === "female").length,
        other: locals.filter((l) => l.gender === "other").length,
      },
    };
    
    console.log("Dashboard data prepared successfully");
    
    return c.json({
      success: true,
      data: {
        travelers,
        locals,
        stats,
      },
    });
  } catch (error) {
    console.error("Error fetching admin dashboard data:", error);
    return c.json(
      {
        success: false,
        error: `Failed to fetch dashboard data: ${error.message}`,
      },
      500
    );
  }
});

Deno.serve(app.fetch);
