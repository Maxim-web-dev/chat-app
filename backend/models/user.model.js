import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  github_id: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
