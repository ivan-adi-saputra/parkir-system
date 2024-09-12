const { default: mongoose } = require("mongoose");

const ParkirSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    duration: Number,
    total: Number,
    nopol: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Parkir", ParkirSchema);
