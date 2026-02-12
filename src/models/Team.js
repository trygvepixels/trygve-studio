// src/models/Team.js
import mongoose, { Schema, models } from "mongoose";

/**
 * Image Schema for general use (Profile Images)
 * Requires src as it's a primary project/profile resource.
 */
const ImageSchema = new Schema(
  {
    src: { type: String, required: true, trim: true }, // Cloudinary URL
    alt: { type: String, default: "", trim: true },
  },
  { _id: false },
);

/**
 * Achievement Schema
 * Stores custom badges/specialties with optional icons.
 */
const AchievementSchema = new Schema(
  {
    text: { type: String, trim: true, maxlength: 100 },
    image: {
      src: { type: String, default: "", trim: true }, // Optional icon for achievement
      alt: { type: String, default: "", trim: true },
    },
  },
  { _id: false },
);

/**
 * Team Member Schema
 */
const TeamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    position: { type: String, required: true, trim: true, maxlength: 120 },
    description: { type: String, default: "", trim: true, maxlength: 2000 },
    achievements: [AchievementSchema],
    image: { type: ImageSchema, required: false }, // Profile Image
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default models.Team || mongoose.model("Team", TeamSchema);
