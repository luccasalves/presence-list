import "./styles.css";
import { Card } from "@/components/Card";
import { useState } from "react";

type Student = {
  name: string;
  time: any;
};

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStundents] = useState<Array<Student | any>>([]);

  function handleAddStundent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStundents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container pa-sm">
      <h1>Lista de presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={handleAddStundent}>Adicionar</button>

      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}
