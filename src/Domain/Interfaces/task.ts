import mongoose from 'mongoose';

export abstract class ITask extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;

  description: string;

  status: boolean;
}
