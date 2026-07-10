import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import HistoryCard from "@/components/history/HistoryCard";
import ResumeDetailsModal from "@/components/history/ResumeDetailsModal";

import {
  getHistory,
  deleteResume,
  getResume,
} from "@/services/resumeService";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  const [selectedResume, setSelectedResume] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const res = await getHistory();

    setHistory(res.resumes);
  }

  async function handleDelete(id) {
    await deleteResume(id);

    loadHistory();
  }

  async function handleView(resume) {
    const response = await getResume(resume._id);

    setSelectedResume(response.resume);

    setOpenModal(true);
  }

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Resume History
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {history.map((resume) => (
          <HistoryCard
            key={resume._id}
            resume={resume}
            onDelete={handleDelete}
            onView={handleView}
          />
        ))}
      </div>

      <ResumeDetailsModal
        open={openModal}
        resume={selectedResume}
        onClose={() => setOpenModal(false)}
      />
    </DashboardLayout>
  );
}