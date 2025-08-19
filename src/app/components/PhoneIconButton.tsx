"use client";

import { useState } from "react";
import { FaPhone, FaRegCopy } from "react-icons/fa";
import styles from "./styles/PhoneIconButton.module.css";

export default function PhoneIconButton() {
  const [showPhone, setShowPhone] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "012-345-6789";

  const togglePhone = () => {
    setShowPhone(!showPhone);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("คัดลอกไม่สำเร็จ");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={togglePhone} className={styles.outerCircle}>
        <div className={styles.innerCircle}>
          <FaPhone size={14} color="#ffffff" />
        </div>
      </div>

      {true && (
        <div className={styles.phonePopup}>
          <span>{phoneNumber}</span>
          <FaRegCopy
            size={16}
            color={copied ? "#4caf50" : "white"}
            style={{ cursor: "pointer" }}
            title={copied ? "คัดลอกแล้ว" : "คัดลอกเบอร์โทร"}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard();
            }}
          />
        </div>
      )}
    </div>
  );
}
