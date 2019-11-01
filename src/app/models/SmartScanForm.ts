import { ScannedImage } from "./ScannedImage";

export interface SmartScanForm {
    FirstName: string,
    LastName: string,
    SSN: string,
    FormPages: ScannedImage[]
}