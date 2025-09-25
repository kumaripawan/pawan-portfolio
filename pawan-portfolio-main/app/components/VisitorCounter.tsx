"use client";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { ref, runTransaction } from "firebase/database";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    const visitorRef = ref(db, "visitors");

    runTransaction(visitorRef, (currentValue) => {
      return (currentValue || 0) + 1;
    })
      .then((result) => {
        setVisitors(result.snapshot.val());
      })
      .catch((err) => console.error("Visitor counter error:", err));
  }, []);

  return (
    <div
      className="text-xs sm:text-sm text-purple-400 bg-white/5
                 px-3 py-1 rounded-lg border border-white/10"
    >
      {visitors !== null ? visitors : "..."} Visitors
    </div>
  );
}
