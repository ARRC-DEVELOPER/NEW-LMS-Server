import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  language: {
    type: String,
    enum: ["English", "Hindi", "Marathi"],
    default: "English",
  },

  courseType: {
    type: String,
    enum: ["Live", "Video", "Text"],
    default: "Live",
  },

  title: {
    type: String,
    required: [true, "Please enter course title"],
    minLength: [4, "Title must be at least 4 characters"],
    maxLength: [80, "Title can exceed 80 characters"],
  },

  points: {
    type: Number,
    default: 0,
  },

  courseUrl: {
    type: String,
    // unique: true,
    // required: true,
  },

  instructor: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Instructor",
    type: String,
    required: true,
  },

  seoMetaDescription: {
    type: String,
    maxlength: 160,
  },

  thumbnail: {
    public_id: {
      type: String,
    //   required: true,
    },
    url: {
      type: String,
    //   required: true,
    },
  },

  coverImage: {
    public_id: {
      type: String,
    //   required: true,
    },
    url: {
      type: String,
    //   required: true,
    },
  },

  demoVideoSource: {
    type: String,
    enum: ["Youtube", "Vimeo", "External Link", "Upload", "Secure Host"],
  },

  demoVideo: {
    public_id: {
      type: String,
    //   required: true,
    },
    url: {
      type: String,
    //   required: true,
    },
  },

  salesCount: {
    type: Number,
    default: 0,
  },

  startDate: {
    type: Date,
  },

  duration: {
    type: Number,
  },

  capacity: {
    type: Number,
    default: 0,
  },

  permissions: {
    support: {
      type: Boolean,
      default: false,
    },
    completionCertificate: {
      type: Boolean,
      default: false,
    },
    downloadable: {
      type: Boolean,
      default: false,
    },
    partnerInstructor: {
      type: Boolean,
      default: false,
    },
    courseForum: {
      type: Boolean,
      default: false,
    },
    subscribe: {
      type: Boolean,
      default: false,
    },
    private: {
      type: Boolean,
      default: false,
    },
  },

  description: {
    type: String,
    // required: [true, "Please enter course description"],
    // minLength: [20, "Description must be at least 20 characters"],
  },

  accessPeriod: {
    type: Number,
    default: 30,
  },

  price: {
    type: Number,
    required: [true, "Please enter course price"],
  },

  tags: {
    type: [String],
    default: [],
  },

  message: {
    type: String,
    maxlength: 500,
  },

  category: {
    type: String,
  },

  income: {
    type: Number,
  },

  students: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    enum: ["Published", "Draft", "Archived"],
    default: "Draft",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
