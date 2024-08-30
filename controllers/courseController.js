import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { courseServices } from "../services/courseServices.js";
const { createACourse, paginateSearch } = courseServices;

export const createCourse = catchAsyncError(async (req, res, next) => {
  const {
    title,
    category,
    instructor,
    price,
    salesCount,
    income,
    studentds,
    status,
    courseUrl,
  } = req.body;

  if (
    !title ||
    !instructor ||
    !category ||
    !price ||
    !salesCount ||
    !income ||
    !studentds
  ) {
    return next(new ErrorHandler("Please enter all required fields", 400));
  }

  const newCourse = await createACourse({
    title,
    category,
    instructor,
    price,
    salesCount,
    income,
    studentds,
    status,
    courseUrl,
  });

  return res.status(201).json({
    success: true,
    newCourse,
    message: "New course created successfully. You can add lectures now.",
  });
});

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const keyword = req.query.keyword || "";
  const category = req.query.category || "";

  const { courses, currentPage, totalPages, totalCourses } =
    await paginateSearch(keyword, category);

  return res.status(200).json({
    success: true,
    courses,
    pagination: {
      totalCourses,
      currentPage,
      totalPages,
    },
  });
});
