import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import "../css/FormModal.css"; // Import the CSS file for styling

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />, 
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <form className="form-delete">
          <span className="delete-warning">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="delete-button">
            Delete
          </button>
        </form>
      );
    } else if (type === "create" || type === "update") {
      return forms[table] ? forms[table](type, data) : <span>Form not found!</span>;
    } else {
      return <span>Form not found!</span>;
    }
  };

  const sizeClass = type === "create" ? "btn-create" : "btn-update";
  const bgClass =
    type === "create"
      ? "bg-yellow"
      : type === "update"
      ? "bg-sky"
      : "bg-purple";

  return (
    <>
      <button
        className={`form-button ${sizeClass} ${bgClass}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Form />
            <div
              className="modal-close"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;