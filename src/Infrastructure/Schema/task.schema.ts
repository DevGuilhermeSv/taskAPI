import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  status: boolean;
}
export const Taskchema = SchemaFactory.createForClass(Task);
