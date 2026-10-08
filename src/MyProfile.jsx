import React from "react";

const profile = {
  name: "Thevinu",
  email: "dttnayakasena@nsbm.ac.lk",
  points: 5,
};

const Avatar = () => (
  <div style={styles.avatarWrap}>
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M12 100 C14 78 30 72 50 72 C70 72 86 78 88 100 Z" fill="#444" />
      <rect x="42" y="62" width="16" height="14" fill="#f2c9a5" />
      <ellipse cx="50" cy="46" rx="22" ry="25" fill="#f7d6b8" stroke="#222" strokeWidth="1.5" />
      <path d="M27 42 C26 18 74 14 73 42 C68 30 58 28 50 30 C40 28 32 32 27 42 Z" fill="#222" />
      <rect x="32" y="42" width="16" height="11" rx="3" fill="#fff" stroke="#222" strokeWidth="2" />
      <rect x="52" y="42" width="16" height="11" rx="3" fill="#fff" stroke="#222" strokeWidth="2" />
      <line x1="48" y1="46" x2="52" y2="46" stroke="#222" strokeWidth="2" />
      <circle cx="40" cy="47.5" r="1.8" fill="#222" />
      <circle cx="60" cy="47.5" r="1.8" fill="#222" />
      <path d="M44 62 Q50 65 56 62" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
    <svg viewBox="0 0 24 24" style={styles.check}>
      <path
        d="M3 13 L9 19 L21 5"
        fill="none"
        stroke="#00e600"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#111">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#111">
    <path d="M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2 7.4 14l-1.6 7z" />
  </svg>
);

export default function MyProfile() {
  return (
    <div style={styles.screen}>
      <header style={styles.appBar}>My Profile</header>

      <main style={styles.body}>
        <Avatar />
        <hr style={styles.divider} />

        <section style={styles.field}>
          <div style={styles.label}>Name</div>
          <div style={styles.value}>{profile.name}</div>
        </section>

        <section style={styles.field}>
          <div style={styles.label}>Email</div>
          <div style={styles.row}>
            <MailIcon />
            <span style={styles.value}>{profile.email}</span>
          </div>
        </section>

        <section style={styles.field}>
          <div style={styles.label}>Points</div>
          <div style={styles.row}>
            <StarIcon />
            <span style={styles.value}>{profile.points}</span>
          </div>
        </section>
      </main>

      <button style={styles.fab} aria-label="Add" onClick={() => alert("Add tapped")}>
        +
      </button>
    </div>
  );
}

const styles = {
  screen: {
    position: "relative",
    width: "100%",
    maxWidth: 400,
    minHeight: "100vh",
    margin: "0 auto",
    background: "#f5f5f5",
    fontFamily: "Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
    color: "#000",
    display: "flex",
    flexDirection: "column",
  },
  appBar: {
    background: "#000",
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    padding: "16px 0",
  },
  body: { padding: "16px 16px 96px" },
  avatarWrap: {
    position: "relative",
    width: 104,
    height: 104,
    margin: "0 auto",
    borderRadius: "50%",
    background: "#fff",
    border: "1px solid #f4a6b8",
    padding: 6,
    boxSizing: "border-box",
  },
  check: { position: "absolute", right: -2, bottom: 2, width: 34, height: 34 },
  divider: { border: 0, borderTop: "2px solid #111", margin: "20px 0 24px" },
  field: { marginBottom: 26 },
  label: { fontSize: 17, fontWeight: 700, marginBottom: 8 },
  value: { fontSize: 17 },
  row: { display: "flex", alignItems: "center", gap: 12 },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: "50%",
    border: 0,
    background: "#000",
    color: "#fff",
    fontSize: 30,
    lineHeight: 1,
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,.35)",
  },
};