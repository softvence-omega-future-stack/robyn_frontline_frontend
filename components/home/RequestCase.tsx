/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import { Phone, Mail, MapPin, Clock, Upload } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Wrapper from '@/common/Wrapper';
import { toast } from 'sonner';

/* ---------------- FORM TYPES ---------------- */
type FormValues = {
  attorneyName: string;
  firm: string;
  email: string;
  phone: string;
  caseType: string;
  retainerInterest?: string;
  summary: string;
  terms: boolean;
  files?: FileList;
};

/* ---------------- COMPONENT ---------------- */
const RequestCase = () => {
  const [charCount, setCharCount] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [uploadedFileObjects, setUploadedFileObjects] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsError, setTermsError] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset
  } = useForm<FormValues>({
    defaultValues: {
      attorneyName: '',
      firm: '',
      email: '',
      phone: '',
      caseType: '',
      retainerInterest: '',
      summary: '',
      terms: false
    }
  });

  const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API || '';

  const onSubmit = async (data: FormValues) => {
    if (!data.terms) {
      setTermsError("You must accept the terms before submitting.");
      return;
    } else {
      setTermsError("");
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      const dataObject = {
        attorneyName: data.attorneyName,
        firm: data.firm,
        email: data.email,
        phone: data.phone,
        caseType: data.caseType,
        retainerInterest: data.retainerInterest || '',
        briefCaseSummary: data.summary,
        agreementChecked: data.terms,
      };

      formDataToSend.append('data', JSON.stringify(dataObject));

      uploadedFileObjects.forEach((file) => {
        formDataToSend.append('documents', file);
      });
    
      const response = await axios.post(
        `${baseApiUrl}/caseReviewRequtest/create`,
        formDataToSend
      );

      if (response.data.success === true) {
        toast.success(response.data.message || "Case review request submitted successfully!");
      }

      reset();
      setUploadedFiles([]);
      setUploadedFileObjects([]);
      setCharCount(0);

    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- FILE UPLOAD ---------------- */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files);

    const allFiles = [...uploadedFileObjects, ...newFiles].filter(
      (file, index, self) =>
        index === self.findIndex(f => f.name === file.name && f.size === file.size)
    );

    setUploadedFileObjects(allFiles);
    setUploadedFiles(allFiles.map(f => f.name));

    const fileList = new DataTransfer();
    allFiles.forEach(f => fileList.items.add(f));
    setValue('files', fileList.files);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (!files.length) return;

    const allFiles = [...uploadedFileObjects, ...files].filter(
      (file, index, self) =>
        index === self.findIndex(f => f.name === file.name && f.size === file.size)
    );

    setUploadedFileObjects(allFiles);
    setUploadedFiles(allFiles.map(f => f.name));

    const fileList = new DataTransfer();
    allFiles.forEach(f => fileList.items.add(f));
    setValue('files', fileList.files);
  };

  const removeFile = (indexToRemove: number) => {
    const newFiles = uploadedFileObjects.filter((_, i) => i !== indexToRemove);
    setUploadedFileObjects(newFiles);
    setUploadedFiles(newFiles.map(f => f.name));

    const fileList = new DataTransfer();
    newFiles.forEach(f => fileList.items.add(f));
    setValue('files', fileList.files);
  };

  return (
    <div id="contact" className="bg-[#21304B] py-12 md:py-20 scroll-mt-18">
      <Wrapper>
        <div className="mx-auto">

          <h1 className="text-xl md:text-[32px] font-semibold text-white text-center mb-8 sm:mb-12">
            Request Case Review
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-6">
              <h2 className="text-base md:text-lg font-medium text-[#F8FAFC]">Contact Information</h2>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#CAD5E2]" />
                <div>
                  <p className="text-[#90A1B9] text-sm">Phone</p>
                  <p className="text-[#CAD5E2] text-sm md:text-base">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#CAD5E2]" />
                <div>
                  <p className="text-[#90A1B9] text-sm">Email</p>
                  <p className="text-[#CAD5E2] text-sm md:text-base">contact@frontlineforensics.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#CAD5E2]" />
                <div>
                  <p className="text-[#90A1B9] text-sm">Office</p>
                  <p className="text-[#CAD5E2] text-sm md:text-base">[City, State]</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[#CAD5E2]" />
                <div>
                  <p className="text-[#90A1B9] text-sm">Office Hours</p>
                  <p className="text-[#CAD5E2] text-sm md:text-base">Mon–Fri: 9:00 AM – 6:00 PM</p>
                  <p className="text-[#90A1B9] text-sm mt-1">Emergency consultations available</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-textGray rounded-lg p-6 md:p-12 space-y-6">

                {/* ATTORNEY + FIRM */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#E2E8F0] mb-2 block">Attorney Name *</label>
                    <Input {...register('attorneyName')} className="bg-textBlue" />
                  </div>

                  <div>
                    <label className="text-[#E2E8F0] mb-2 block">Firm *</label>
                    <Input {...register('firm')} className="bg-textBlue" />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#E2E8F0] mb-2 block">Email *</label>
                    <Input type="email" {...register('email')} className="bg-textBlue" />
                  </div>

                  <div>
                    <label className="text-[#E2E8F0] mb-2 block">Phone *</label>
                    <Input type="tel" {...register('phone')} className="bg-textBlue" />
                  </div>
                </div>

                {/* CASE TYPE + RETAINER */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#E2E8F0] mb-2 block">Case Type *</label>

                    <Controller
                      name="caseType"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="bg-textBlue">
                            <SelectValue placeholder="Select case type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Criminal">Criminal</SelectItem>
                            <SelectItem value="Civil">Civil</SelectItem>
                            <SelectItem value="Family">Family</SelectItem>
                            <SelectItem value="Corporate">Corporate</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-[#E2E8F0] mb-2 block">Retainer Interest</label>

                    <Controller
                      name="retainerInterest"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="bg-textBlue">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Consultation">Consultation</SelectItem>
                            <SelectItem value="Full Retainer">Full Retainer</SelectItem>
                            <SelectItem value="Expert Witness">Expert Witness</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                {/* SUMMARY */}
                <div>
                  <label className="text-[#E2E8F0] mb-2 block">Brief Case Summary *</label>

                  <Textarea
                    {...register('summary')}
                    onChange={(e) => {
                      setCharCount(e.target.value.length);
                      register('summary').onChange(e);
                    }}
                    maxLength={500}
                    className="bg-textBlue min-h-[90px]"
                    placeholder="Briefly describe the case..."
                  />

                  <p className="text-textBlue text-xs">{charCount}/500 characters</p>
                </div>

                {/* FILE UPLOAD */}
                <div>
                  <label className="text-[#E2E8F0] mb-2 block">Upload Documents (Optional)</label>

                  <div
                    className="border-2 border-dashed border-slate-400 rounded-lg p-8 text-center cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <Upload className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                    <p className="text-[#E2E8F0]">Click to upload or drag and drop</p>

                    {/* LIST OF UPLOADED FILES WITH REMOVE BUTTON */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {uploadedFiles.map((fileName, index) => (
                          <span
                            key={index}
                            className="bg-green-400 text-white px-2 py-1 rounded flex items-center gap-1"
                          >
                            {fileName}
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* TERMS */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Controller
                      name="terms"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={(v) => {
                            setTermsError("");
                            field.onChange(v);
                          }}
                        />
                      )}
                    />
                    <label htmlFor="terms" className="text-[#CAD5E2] text-sm cursor-pointer">
                      I confirm I am licensed counsel and accept the{" "}
                      <span className="text-baseBg">terms & privacy policy</span>.
                    </label>
                  </div>

                  {termsError && (
                    <p className="text-red-400 text-xs mt-1">{termsError}</p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <Button
                  type="submit"
                  className="w-full bg-baseBg text-white"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Case Review Request'}
                </Button>

                <p className="text-[#C4CDD5] text-xs text-center">
                  Submitted materials are treated as attorney work product and held in strict confidence.
                </p>

              </form>
            </div>

          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default RequestCase;










// 'use client';

// import { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Upload
// } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@/components/ui/select';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
// import Wrapper from '@/common/Wrapper';


// // ----------------- SCHEMA -----------------
// const FormSchema = z.object({
//   attorneyName: z.string().min(1, 'Attorney name is required'),
//   firm: z.string().min(1, 'Firm is required'),
//   email: z.string().email('Enter a valid email'),
//   phone: z.string().min(6, 'Enter a valid phone'),
//   caseType: z.string().min(1, 'Select case type'),
//   retainerInterest: z.string().optional(),
//   summary: z.string().min(1, 'Summary is required'),
//   terms: z.boolean().refine((val) => val === true, 'You must accept the terms'),
//   files: z.any().optional(),
// });

// type FormValues = z.infer<typeof FormSchema>;


// // ----------------- COMPONENT -----------------
// const RequestCase = () => {
//   const [charCount, setCharCount] = useState(0);
//   const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     formState: { errors }
//   } = useForm<FormValues>({
//     resolver: zodResolver(FormSchema),
//   });

//   const onSubmit = (data: FormValues) => {
//     console.log('Submitted Form Data:', data);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const fileNames = Array.from(e.target.files).map((f) => f.name);
//       setUploadedFiles(fileNames);
//       setValue('files', e.target.files);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     if (e.dataTransfer.files) {
//       const filesArray = Array.from(e.dataTransfer.files);
//       setUploadedFiles(filesArray.map((f) => f.name));
//       setValue('files', filesArray);
//     }
//   };


//   return (
//     <div id="contact" className="bg-[#21304B] py-12 md:py-20 scroll-mt-18">
//       <Wrapper>
//         <div className="mx-auto">

//           {/* TITLE */}
//           <h1 className="text-xl md:text-[32px] font-semibold text-white text-center mb-8 sm:mb-12">
//             Request Case Review
//           </h1>


//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

//             {/* LEFT SIDEBAR */}
//             <div className="md:col-span-1">
//               <div className="space-y-6">
//                 <h2 className="text-base md:text-lg font-medium text-[#F8FAFC] mb-4 md:mb-6">
//                   Contact Information
//                 </h2>

//                 {/* Phone */}
//                 <div className="flex items-start gap-3">
//                   <Phone className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                   <div>
//                     <p className="text-[#90A1B9] text-sm">Phone</p>
//                     <p className="text-[#CAD5E2] text-sm md:text-base">
//                       +1 (234) 567-890
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-start gap-3">
//                   <Mail className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                   <div>
//                     <p className="text-[#90A1B9] text-sm">Email</p>
//                     <p className="text-[#CAD5E2] text-sm md:text-base">
//                       contact@frontlineforensics.com
//                     </p>
//                   </div>
//                 </div>

//                 {/* Office */}
//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                   <div>
//                     <p className="text-[#90A1B9] text-sm">Office</p>
//                     <p className="text-[#CAD5E2] text-sm md:text-base">
//                       [City, State]
//                     </p>
//                   </div>
//                 </div>

//                 {/* Hours */}
//                 <div className="flex items-start gap-3">
//                   <Clock className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                   <div>
//                     <p className="text-[#90A1B9] text-sm">Office Hours</p>
//                     <p className="text-[#CAD5E2] text-sm md:text-base">
//                       Mon-Fri: 9:00 AM - 6:00 PM
//                     </p>
//                     <p className="text-[#90A1B9] text-sm mt-1">
//                       Emergency consultations available
//                     </p>
//                   </div>
//                 </div>

//                 {/* Secure */}
//                 <div className="bg-baseBg/10 rounded-lg md:rounded-[14px] p-4 md:p-6 mt-6 border border-textGray">
//                   <h3 className="text-baseBg mb-2">Secure Communication</h3>
//                   <p className="text-[#CAD5E2] text-sm">
//                     For very sensitive material, request encrypted transfer instructions after submission.
//                   </p>
//                 </div>
//               </div>
//             </div>


//             {/* RIGHT FORM */}
//             <div className="md:col-span-2">
//               <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="bg-textGray rounded-lg md:rounded-[14px] p-6 md:p-12 space-y-6"
//               >

//                 {/* Name + Firm */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                   {/* Attorney Name */}
//                   <div>
//                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                       Attorney Name *
//                     </label>
//                     <Input
//                       {...register('attorneyName')}
//                       className="bg-textBlue border border-[#45556C] rounded-lg"
//                     />
//                     {errors.attorneyName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.attorneyName.message}
//                       </p>
//                     )}
//                   </div>

//                   {/* Firm */}
//                   <div>
//                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                       Firm *
//                     </label>
//                     <Input
//                       {...register('firm')}
//                       className="bg-textBlue border border-[#45556C] rounded-lg"
//                     />
//                     {errors.firm && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.firm.message}
//                       </p>
//                     )}
//                   </div>

//                 </div>

//                 {/* Email + Phone */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                   {/* Email */}
//                   <div>
//                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                       Email *
//                     </label>
//                     <Input
//                       type="email"
//                       {...register('email')}
//                       className="bg-textBlue border border-[#45556C] rounded-lg"
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.email.message}
//                       </p>
//                     )}
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                       Phone *
//                     </label>
//                     <Input
//                       type="tel"
//                       {...register('phone')}
//                       className="bg-textBlue border border-[#45556C] rounded-lg"
//                     />
//                     {errors.phone && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.phone.message}
//                       </p>
//                     )}
//                   </div>

//                 </div>

//                 {/* CASE TYPE + RETAINER */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                   {/* CASE TYPE */}
//                   <div>
//                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                       Case Type *
//                     </label>

//                     <Controller
//                       name="caseType"
//                       control={control}
//                       render={({ field }) => (
//                         <>
//                           <Select
//                             onValueChange={field.onChange}
//                             defaultValue={field.value}
//                           >
//                             <SelectTrigger className="bg-textBlue border-0">
//                               <SelectValue placeholder="Select case type" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="criminal">Criminal</SelectItem>
//                               <SelectItem value="civil">Civil</SelectItem>
//                               <SelectItem value="family">Family</SelectItem>
//                               <SelectItem value="corporate">Corporate</SelectItem>
//                             </SelectContent>
//                           </Select>

//                           {errors.caseType && (
//                             <p className="text-red-500 text-sm mt-1">
//                               {errors.caseType.message}
//                             </p>
//                           )}
//                         </>
//                       )}
//                     />

//                   </div>

//                   {/* RETAINER */}
//                   <div>
//                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                       Retainer Interest
//                     </label>

//                     <Controller
//                       name="retainerInterest"
//                       control={control}
//                       render={({ field }) => (
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <SelectTrigger className="bg-textBlue border-0">
//                             <SelectValue placeholder="Select model" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="consultation">Consultation</SelectItem>
//                             <SelectItem value="full-retainer">Full Retainer</SelectItem>
//                             <SelectItem value="expert-witness">Expert Witness</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       )}
//                     />

//                   </div>

//                 </div>

//                 {/* SUMMARY */}
//                 <div>
//                   <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                     Brief Case Summary *
//                   </label>
//                   <Textarea
//                     {...register('summary')}
//                     onChange={(e) => {
//                       setCharCount(e.target.value.length);
//                       register('summary').onChange(e);
//                     }}
//                     maxLength={500}
//                     className="bg-textBlue border-0 min-h-[90px]"
//                     placeholder="Briefly describe the case..."
//                   />
//                   <p className="text-textBlue text-xs md:text-sm mt-2">
//                     {charCount}/500 characters
//                   </p>

//                   {errors.summary && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.summary.message}
//                     </p>
//                   )}
//                 </div>


//                 {/* FILE UPLOAD */}
//                 <div>
//                   <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                     Upload Documents (Optional)
//                   </label>

//                   <div
//                     className="border-2 border-dashed border-slate-400 rounded-lg p-8 text-center hover:border-slate-300 transition-colors cursor-pointer"
//                     onDragOver={handleDragOver}
//                     onDrop={handleDrop}
//                     onClick={() =>
//                       document.getElementById('file-upload')?.click()
//                     }
//                   >
//                     <input
//                       id="file-upload"
//                       type="file"
//                       multiple
//                       accept=".pdf,.docx,.jpg,.jpeg,.png"
//                       onChange={handleFileChange}
//                       className="hidden"
//                     />

//                     <Upload className="w-8 h-8 text-slate-300 mx-auto mb-2" />
//                     <p className="text-[#E2E8F0] mb-1">
//                       Click to upload or drag and drop
//                     </p>
//                     <p className="text-slate-400 text-sm">
//                       PDF, DOCX, JPG (max 10MB)
//                     </p>

//                     {uploadedFiles.length > 0 && (
//                       <p className="text-green-400 text-sm mt-2">
//                         {uploadedFiles.length} file(s): {uploadedFiles.join(', ')}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* TERMS */}
//                 <div className="flex items-start gap-2">
//                   <Controller
//                     name="terms"
//                     control={control}
//                     render={({ field }) => (
//                       <Checkbox
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                         id="terms"
//                       />
//                     )}
//                   />
//                   <label htmlFor="terms" className="text-[#CAD5E2] text-sm cursor-pointer">
//                     I confirm I am licensed counsel and accept the{" "}
//                     <span className="text-baseBg">terms & privacy policy</span>.
//                   </label>
//                 </div>

//                 {errors.terms && (
//                   <p className="text-red-500 text-sm">
//                     {errors.terms.message}
//                   </p>
//                 )}


//                 {/* SUBMIT */}
//                 <Button
//                   type="submit"
//                   className="w-full bg-baseBg hover:bg-orange-500 text-white font-medium text-sm md:text-base cursor-pointer"
//                 >
//                   Submit Case Review Request
//                 </Button>

//                 {/* FOOTER */}
//                 <p className="text-[#C4CDD5] text-xs text-center">
//                   Submitted materials are treated as attorney work product and held in strict confidence.
//                 </p>

//               </form>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default RequestCase;