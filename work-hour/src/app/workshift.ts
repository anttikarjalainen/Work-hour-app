export class WorkShift {

id: number;
workDate: Date;
startTime: string;
endTime: string;
workShiftLength: number;

constructor(id?: number, workDate?: Date, startTime?: string, endTime?: string, workShiftLength?: number) {

  this.id = id;
  this.workDate = workDate;
  this.startTime = startTime;
  this.endTime = endTime;
  this.workShiftLength = workShiftLength;
}
}
