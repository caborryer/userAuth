import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Product extends Document {
  @Prop({ required: true })
  @Prop()
  id: number;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  stock: number;
  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
