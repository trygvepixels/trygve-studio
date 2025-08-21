import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import FeatureProject from "@/models/FeatureProject";
import mongoose from "mongoose";

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

export async function GET(_req, { params }) {
  await connectDB();
  const { id } = params;
  if (!isValidId(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const doc = await FeatureProject.findById(id).lean();
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(doc);
}

export async function PATCH(request, { params }) {
  await connectDB();
  const { id } = params;
  if (!isValidId(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const body = await request.json();
  try {
    const doc = await FeatureProject.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    ).lean();
    if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(doc);
  } catch (err) {
    console.error(err);
    if (err?.code === 11000) return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  await connectDB();
  const { id } = params;
  if (!isValidId(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  await FeatureProject.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}