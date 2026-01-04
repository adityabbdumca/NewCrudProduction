import React, { useState } from "react";
import EpmForm from "../component/EpmForm";
import EpmTable from "../component/EpmTable";
import { useAddTheData, useUpDateData } from "../hooks/useEmp";
function EmpPage() {
  const [edit, setEditData] = useState(null);
  const createThaData = useAddTheData();
  const upDataData = useUpDateData();
  const handleCreate = (empData) => {
    createThaData.mutate(empData);
  };
  const handleUpdata = (empData) => {
    upDataData.mutate({ id: edit.id, empData });
    setEditData(null);
  };

  return (
    <div>
      <EpmForm
        onSubmit={edit ? handleUpdata : handleCreate}
        initialData={edit}
      />
      <EpmTable edit={(emp) => setEditData(emp)} />
    </div>
  );
}

export default EmpPage;
