import { deleteCourse } from "../../entities/course/api";

export const useDeleteCourse = (id) => {
  const handleDelete = async () => {
    if (!window.confirm("Вы уверены, что хотите удалить этот курс?")) return;

    try {
      await deleteCourse(id);
      alert("Курс успешно удалён.");
      window.location.href = "/";
    } catch (error) {
      console.error("Ошибка при удалении курса:", error);
      alert("Не удалось удалить курс.");
    }
  };

  return { handleDelete };
};
