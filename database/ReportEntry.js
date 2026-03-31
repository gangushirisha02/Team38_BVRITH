import mongoose from 'mongoose';

const reportEntrySchema = new mongoose.Schema({
  weeklyReportId: { type: mongoose.Schema.Types.ObjectId, ref: 'WeeklyReport', required: true },
  sectionName: {
    type: String,
    enum: [
      'General points','Faculty joined / relieved','Faculty achievements','Student achievements','Department achievements','Faculty events conducted','Student events conducted','Non-technical events conducted','Industry / college visits','Hackathon / external event participation','Faculty FDP / certification attendance','Faculty visits','Patents published','VEDIC programs','Placements','MoUs signed','Skill development programs'
    ],
    required: true
  },
  title: { type: String, required: true },
  details: { type: String, default: '' },
  entryDate: { type: Date, required: true },
  department: { type: String, default: '' },
  participantCount: { type: Number, default: 0 },
  contributorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contributorName: { type: String, required: true },
  validationStatus: { type: String, enum: ['pending', 'in_progress', 'complete'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model('ReportEntry', reportEntrySchema);