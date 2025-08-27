import React, { useState } from "react";
import formtaskAvatar from "../assets/images/formtask_alex_small.jpg";
import formtaskClip from "../assets/images/formtask_clip.svg";

const FormTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    task: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("info", formData.task);
    data.append("file", formData.file);

    try {
      const response = await fetch(
        "https://library-app-five-nu.vercel.app/send",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) throw new Error("Ошибка отправки");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        task: "",
        file: null,
      });

      // Сброс поля файла
      document.getElementById("file").value = "";
    } catch (error) {
      console.error("Ошибка:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
    document.getElementById("file").value = "";
  };

  return (
    <section className="formtask">
      <div className="container">
        <div className="formtask__wrapper" id="formtask">
          <div className="formtask__tellus">
            <div className="formtask__tellus--about">
              <h2 className="formtask__tellus-title">
                Расскажите нам о своей задаче
              </h2>
              <p className="formtask__tellus-text">
                Оставьте заявку и мы поможем решить вашу бизнес-задачу
              </p>
            </div>
            <div className="formtask__tellus--card">
              {/* <p className="formtask__tellus-status">online</p> */}
              <div className="formtask__person">
                <img src={formtaskAvatar} alt="avatar" />
                <div className="formtask__person-box">
                  <h5 className="formtask__person-name">Алексей</h5>
                  <p className="formtask__person-status">Sales-менеджер</p>
                </div>
              </div>
              <div className="formtask__info">
                <p className="formtask__info-title">Телефон менеджера:</p>
                <h4 className="formtask__info-phone">+7 (495) 798-20-20</h4>
              </div>
            </div>
          </div>
          <div className="formtask__form">
            <form onSubmit={handleSubmit}>
              <div className="formtask__form-wrapper">
                <div className="formtask__small">
                  <input
                    className="formtask__form-name"
                    placeholder="Как к вам обращаться?"
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="formtask__form-mail"
                    placeholder="Электронная почта"
                    type="email"
                    name="email"
                    id="mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <textarea
                  className="formtask__form-task"
                  placeholder="Опишите задачу"
                  name="task"
                  id="task"
                  value={formData.task}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <input
                  className="formtask__form-file"
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleFileChange}
                  placeholder="Прикрепить файл"
                />
                <label className="formtask__form-label" htmlFor="file">
                  <img
                    className="formtask__form-clip"
                    src={formtaskClip}
                    alt=""
                  />
                  Прикрепить файл
                </label>
                {formData.file && (
                  <div className="formtask__file-preview">
                    <span>{formData.file?.name}</span>
                    <button
                      type="button"
                      className="formtask__file-remove"
                      onClick={handleRemoveFile}
                    >
                      ×
                    </button>
                  </div>
                )}
                {submitStatus === "success" && (
                  <p className="form-success">Сообщение успешно отправлено!</p>
                )}
                {submitStatus === "error" && (
                  <p className="form-error">
                    Произошла ошибка при отправке. Попробуйте еще раз.
                  </p>
                )}
                <button
                  className="formtask__form-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Обсудить проект"}
                </button>
                <p className="formtask__form-text">
                  Нажимая на кнопку «Обсудить проект» я принимаю условия <span className="formtask__form-link">политики конфедиценциальности</span>, <span className="formtask__form-link">пользовательского соглашения</span> и <span className="formtask__form-link">публичной оферты</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormTask;
