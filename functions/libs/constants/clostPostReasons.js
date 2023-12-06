const CLOSE_POST_REASONS = [
  {
    id: "post_duplicate",
    label: "เนื้อหาประกาศซ้ำซ้อนกับประกาศอื่นที่มีอยู่แล้ว",
  },
  {
    id: "post_spam",
    label: "เนื้อหาประกาศมีลักษณะสแปม",
  },
  {
    id: "post_copyright_issue",
    label:
      "เนื้อหาประกาศหรือรูปภาพอาจละเมิดลิขสิทธิ์ของเว็บอื่น เช่นรูปภาพที่มีลายน้ำของเว็บอื่น",
  },
  {
    id: "post_unauthorized",
    label:
      "เจ้าของเนื้อหาประกาศนี้(ที่ได้รับการยืนยันตัวตนแล้ว) แจ้งว่าท่านนำประกาศไปใช้โดยไม่ได้รับอนุญาต",
  },
];

module.exports = {
  CLOSE_POST_REASONS,
};
