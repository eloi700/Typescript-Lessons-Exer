import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router(); // Call Router() to get router object
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

// Handling POST request
router.post("/", (req, res) => {
  // read the body of the request
  const { title } = req.body as CreateReminderDto;
  //Building API - Grab the title to create reminder obj and store it somewhere/Database. Every reminder should have 3 properties (id, title, isComplete). Reminder Obj will be ENCAPSULATED inside a reminder class.
  const reminder = new Reminder(title);
  reminders.push(reminder);

  res.status(201).json(reminder);
});

export default router;
