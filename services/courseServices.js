import Course from "../models/Course.js";

export const courseServices = {
  findAllCourses: async () => {
    return await Course.find({});
  },

  createACourse: async (insertObj) => {
    return await Course.create(insertObj);
  },

  findCourse: async (courseId) => {
    return await Course.findById(courseId);
  },

  findAndDelete: async (courseId) => {
    return await Course.findByIdAndDelete(courseId);
  },

  paginateSearch: async (keyword, category, page = 1, limit = 10) => {
    const query = {
      title: {
        $regex: keyword,
        $options: "i",
      },
      category: {
        $regex: category,
        $options: "i",
      },
    };

    const totalCourses = await Course.countDocuments(query);
    const totalPages = Math.ceil(totalCourses / limit);

    const courses = await Course.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    return {
      courses,
      currentPage: page,
      totalPages,
      totalCourses,
    };
  },
};
