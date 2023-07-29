const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => formatTimestamp(timestamp)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

function formatTimestamp(timestamp) {
  const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
  };
  return timestamp.toLocaleDateString("en-US", options) + " at " + timestamp.toLocaleTimeString();
}

module.exports = reactionSchema;
