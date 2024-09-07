import { useForm } from "react-hook-form";
import {
  formContainer,
  inputContainer,
  sectionBorder,
  sectionContainer,
} from "../sharedStyles/form";
import Header from "../components/Header";
import Cookies from "js-cookie";
import { postApiWithToken } from "../utils/api";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

function RegisterCourse() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleNavigateToHome() {
    navigate("/home");
  }

  async function registerNewCourseApi(data) {
    try {
      const token = Cookies.get("authToken");
      const serverRes = await postApiWithToken("/stdCourse", data, token);
      if (!serverRes.ok) {
        alert("You are not authorized to create course");
      }
      const resData = await serverRes.json();
      const courseCode = resData.data.course_code;
      console.log(resData);
      alert(`New course registered: ${courseCode}`);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Error register new course");
    }
  }

  const onSubmit = async (data) => {
    await registerNewCourseApi(data);
  };

  return (
    <div>
      <Header />
      <HeaderNav />

      <div style={sectionContainer}>
        <section style={sectionBorder}>
          <h1 style={{ marginBottom: "1rem" }}>Register Course</h1>
          <form onSubmit={handleSubmit(onSubmit)} style={formContainer}>
            <div style={inputContainer}>
              <lable>Course Code</lable>
              <input
                {...register("course_code")}
                type="text"
                name="course_code"
                placeholder="course code"
              />
            </div>
            <button type="submit" className="primary-black">
              Register Course
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default RegisterCourse;
