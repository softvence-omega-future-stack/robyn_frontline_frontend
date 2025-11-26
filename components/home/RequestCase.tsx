'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Upload
} from 'lucide-react';
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


// ----------------- SCHEMA -----------------
const FormSchema = z.object({
  attorneyName: z.string().min(1, 'Attorney name is required'),
  firm: z.string().min(1, 'Firm is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(6, 'Enter a valid phone'),
  caseType: z.string().min(1, 'Select case type'),
  retainerInterest: z.string().optional(),
  summary: z.string().min(1, 'Summary is required'),
  terms: z.boolean().refine((val) => val === true, 'You must accept the terms'),
  files: z.any().optional(),
});

type FormValues = z.infer<typeof FormSchema>;


// ----------------- COMPONENT -----------------
const RequestCase = () => {
  const [charCount, setCharCount] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Submitted Form Data:', data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles(fileNames);
      setValue('files', e.target.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files);
      setUploadedFiles(filesArray.map((f) => f.name));
      setValue('files', filesArray);
    }
  };


  return (
    <div id="contact" className="bg-[#21304B] py-12 md:py-20 scroll-mt-18">
      <Wrapper>
        <div className="mx-auto">

          {/* TITLE */}
          <h1 className="text-xl md:text-[32px] font-semibold text-white text-center mb-8 sm:mb-12">
            Request Case Review
          </h1>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

            {/* LEFT SIDEBAR */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <h2 className="text-base md:text-lg font-medium text-[#F8FAFC] mb-4 md:mb-6">
                  Contact Information
                </h2>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#CAD5E2] shrink-0" />
                  <div>
                    <p className="text-[#90A1B9] text-sm">Phone</p>
                    <p className="text-[#CAD5E2] text-sm md:text-base">
                      +1 (234) 567-890
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#CAD5E2] shrink-0" />
                  <div>
                    <p className="text-[#90A1B9] text-sm">Email</p>
                    <p className="text-[#CAD5E2] text-sm md:text-base">
                      contact@frontlineforensics.com
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#CAD5E2] shrink-0" />
                  <div>
                    <p className="text-[#90A1B9] text-sm">Office</p>
                    <p className="text-[#CAD5E2] text-sm md:text-base">
                      [City, State]
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#CAD5E2] shrink-0" />
                  <div>
                    <p className="text-[#90A1B9] text-sm">Office Hours</p>
                    <p className="text-[#CAD5E2] text-sm md:text-base">
                      Mon-Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-[#90A1B9] text-sm mt-1">
                      Emergency consultations available
                    </p>
                  </div>
                </div>

                {/* Secure */}
                <div className="bg-baseBg/10 rounded-lg md:rounded-[14px] p-4 md:p-6 mt-6 border border-textGray">
                  <h3 className="text-baseBg mb-2">Secure Communication</h3>
                  <p className="text-[#CAD5E2] text-sm">
                    For very sensitive material, request encrypted transfer instructions after submission.
                  </p>
                </div>
              </div>
            </div>


            {/* RIGHT FORM */}
            <div className="md:col-span-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-textGray rounded-lg md:rounded-[14px] p-6 md:p-12 space-y-6"
              >

                {/* Name + Firm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Attorney Name */}
                  <div>
                    <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                      Attorney Name *
                    </label>
                    <Input
                      {...register('attorneyName')}
                      className="bg-textBlue border border-[#45556C] rounded-lg"
                    />
                    {errors.attorneyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.attorneyName.message}
                      </p>
                    )}
                  </div>

                  {/* Firm */}
                  <div>
                    <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                      Firm *
                    </label>
                    <Input
                      {...register('firm')}
                      className="bg-textBlue border border-[#45556C] rounded-lg"
                    />
                    {errors.firm && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firm.message}
                      </p>
                    )}
                  </div>

                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Email */}
                  <div>
                    <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      {...register('email')}
                      className="bg-textBlue border border-[#45556C] rounded-lg"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      {...register('phone')}
                      className="bg-textBlue border border-[#45556C] rounded-lg"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                </div>

                {/* CASE TYPE + RETAINER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* CASE TYPE */}
                  <div>
                    <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                      Case Type *
                    </label>

                    <Controller
                      name="caseType"
                      control={control}
                      render={({ field }) => (
                        <>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="bg-textBlue border-0">
                              <SelectValue placeholder="Select case type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="criminal">Criminal</SelectItem>
                              <SelectItem value="civil">Civil</SelectItem>
                              <SelectItem value="family">Family</SelectItem>
                              <SelectItem value="corporate">Corporate</SelectItem>
                            </SelectContent>
                          </Select>

                          {errors.caseType && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.caseType.message}
                            </p>
                          )}
                        </>
                      )}
                    />

                  </div>

                  {/* RETAINER */}
                  <div>
                    <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                      Retainer Interest
                    </label>

                    <Controller
                      name="retainerInterest"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="bg-textBlue border-0">
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="full-retainer">Full Retainer</SelectItem>
                            <SelectItem value="expert-witness">Expert Witness</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />

                  </div>

                </div>

                {/* SUMMARY */}
                <div>
                  <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                    Brief Case Summary *
                  </label>
                  <Textarea
                    {...register('summary')}
                    onChange={(e) => {
                      setCharCount(e.target.value.length);
                      register('summary').onChange(e);
                    }}
                    maxLength={500}
                    className="bg-textBlue border-0 min-h-[90px]"
                    placeholder="Briefly describe the case..."
                  />
                  <p className="text-textBlue text-xs md:text-sm mt-2">
                    {charCount}/500 characters
                  </p>

                  {errors.summary && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.summary.message}
                    </p>
                  )}
                </div>


                {/* FILE UPLOAD */}
                <div>
                  <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
                    Upload Documents (Optional)
                  </label>

                  <div
                    className="border-2 border-dashed border-slate-400 rounded-lg p-8 text-center hover:border-slate-300 transition-colors cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById('file-upload')?.click()
                    }
                  >
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <Upload className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-[#E2E8F0] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-slate-400 text-sm">
                      PDF, DOCX, JPG (max 10MB)
                    </p>

                    {uploadedFiles.length > 0 && (
                      <p className="text-green-400 text-sm mt-2">
                        {uploadedFiles.length} file(s): {uploadedFiles.join(', ')}
                      </p>
                    )}
                  </div>
                </div>

                {/* TERMS */}
                <div className="flex items-start gap-2">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="terms"
                      />
                    )}
                  />
                  <label htmlFor="terms" className="text-[#CAD5E2] text-sm cursor-pointer">
                    I confirm I am licensed counsel and accept the{" "}
                    <span className="text-baseBg">terms & privacy policy</span>.
                  </label>
                </div>

                {errors.terms && (
                  <p className="text-red-500 text-sm">
                    {errors.terms.message}
                  </p>
                )}


                {/* SUBMIT */}
                <Button
                  type="submit"
                  className="w-full bg-baseBg hover:bg-orange-500 text-white font-medium text-sm md:text-base cursor-pointer"
                >
                  Submit Case Review Request
                </Button>

                {/* FOOTER */}
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
// import { Phone, Mail, MapPin, Clock, Upload } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
// import Wrapper from '@/common/Wrapper';

// const RequestCase = () => {
//     const [charCount, setCharCount] = useState(0);
//     const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             const files = Array.from(e.target.files).map(f => f.name);
//             setUploadedFiles(files);
//         }
//     };

//     const handleDragOver = (e: React.DragEvent) => {
//         e.preventDefault();
//     };

//     const handleDrop = (e: React.DragEvent) => {
//         e.preventDefault();
//         if (e.dataTransfer.files) {
//             const files = Array.from(e.dataTransfer.files).map(f => f.name);
//             setUploadedFiles(files);
//         }
//     };

//     return (
//         <div id='contact' className="bg-[#21304B] py-12 md:py-20">
//             <Wrapper>
//                 <div className="mx-auto">
//                     <h1 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-white text-center mb-8 sm:mb-12">
//                         Request Case Review
//                     </h1>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
//                         {/* Left Sidebar - Contact Information */}
//                         <div className="md:col-span-1">
//                             <div className="space-y-6">
//                                 <h2 className="text-base md:text-lg font-medium text-[#F8FAFC] mb-4 md:mb-6">Contact Information</h2>

//                                 {/* Phone */}
//                                 <div className="flex items-start gap-3">
//                                     <Phone className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                                     <div>
//                                         <p className="text-[#90A1B9] text-sm">Phone</p>
//                                         <p className="text-[#CAD5E2] text-sm md:text-base">+1 (234) 567-890</p>
//                                     </div>
//                                 </div>

//                                 {/* Email */}
//                                 <div className="flex items-start gap-3">
//                                     <Mail className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                                     <div>
//                                         <p className="text-[#90A1B9] text-sm">Email</p>
//                                         <p className="text-[#CAD5E2] text-sm md:text-base">contact@frontlineforensics.com</p>
//                                     </div>
//                                 </div>

//                                 {/* Office */}
//                                 <div className="flex items-start gap-3">
//                                     <MapPin className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                                     <div>
//                                         <p className="text-[#90A1B9] text-sm">Office</p>
//                                         <p className="text-[#CAD5E2] text-sm md:text-base">[City, State]</p>
//                                     </div>
//                                 </div>

//                                 {/* Office Hours */}
//                                 <div className="flex items-start gap-3">
//                                     <Clock className="w-5 h-5 text-[#CAD5E2] shrink-0" />
//                                     <div>
//                                         <p className="text-[#90A1B9] text-sm">Office Hours</p>
//                                         <p className="text-[#CAD5E2] text-sm md:text-base">Mon-Fri: 9:00 AM - 6:00 PM</p>
//                                         <p className="text-[#90A1B9] text-sm mt-1">Emergency consultations available</p>
//                                     </div>
//                                 </div>

//                                 {/* Secure Communication */}
//                                 <div className="bg-baseBg/10 rounded-[14px] p-4 md:p-6 mt-6 border border-textGray">
//                                     <h3 className="text-baseBg mb-2">Secure Communication</h3>
//                                     <p className="text-[#CAD5E2] text-sm">
//                                         For very sensitive material, request encrypted transfer instructions after submission.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side - Form */}
//                         <div className="md:col-span-2">
//                             <div className="bg-textGray rounded-[14px] p-6 md:p-12 space-y-6">
//                                 {/* Attorney Name and Firm */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                             Attorney Name <span className="text-red-500">*</span>
//                                         </label>
//                                         <Input
//                                             className="bg-textBlue border border-[#45556C] rounded-lg"
//                                             placeholder=""
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                             Firm <span className="text-red-500">*</span>
//                                         </label>
//                                         <Input
//                                             className="bg-textBlue border border-[#45556C] rounded-lg"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>
//                                 {/* Email and Phone */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                             Email <span className="text-red-500">*</span>
//                                         </label>
//                                         <Input
//                                             type="email"
//                                             className="bg-textBlue border border-[#45556C] rounded-lg"
//                                             placeholder=""
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                             Phone <span className="text-red-500">*</span>
//                                         </label>
//                                         <Input
//                                             type="tel"
//                                             className="bg-textBlue border border-[#45556C] rounded-lg"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Case Type and Retainer Interest */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                             Case Type <span className="text-red-500">*</span>
//                                         </label>
//                                         <Select>
//                                             <SelectTrigger className="bg-textBlue border-0">
//                                                 <SelectValue placeholder="Select case type" />
//                                             </SelectTrigger>
//                                             <SelectContent>
//                                                 <SelectItem value="criminal">Criminal</SelectItem>
//                                                 <SelectItem value="civil">Civil</SelectItem>
//                                                 <SelectItem value="family">Family</SelectItem>
//                                                 <SelectItem value="corporate">Corporate</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>

//                                     <div>
//                                         <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                             Retainer Interest
//                                         </label>
//                                         <Select>
//                                             <SelectTrigger className="bg-textBlue border-0">
//                                                 <SelectValue placeholder="Select model" />
//                                             </SelectTrigger>
//                                             <SelectContent>
//                                                 <SelectItem value="consultation">Consultation</SelectItem>
//                                                 <SelectItem value="full-retainer">Full Retainer</SelectItem>
//                                                 <SelectItem value="expert-witness">Expert Witness</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>
//                                 </div>

//                                 {/* Brief Case Summary */}
//                                 <div>
//                                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                         Brief Case Summary <span className="text-red-500">*</span>
//                                     </label>
//                                     <Textarea
//                                         className="bg-textBlue border-0 min-h-[90px]"
//                                         placeholder="Briefly describe the case and evidence review needed..."
//                                         onChange={(e) => setCharCount(e.target.value.length)}
//                                         maxLength={500}
//                                     />
//                                     <div className="flex justify-start mt-2">
//                                         <p className="text-textBlue text-xs md:text-sm">{charCount}/500 characters</p>
//                                     </div>
//                                 </div>

//                                 {/* Upload Documents */}
//                                 <div>
//                                     <label className="block text-[#E2E8F0] text-sm font-medium mb-2">
//                                         Upload Documents (Optional)
//                                     </label>
//                                     <div
//                                         className="border-2 border-dashed border-slate-400 rounded-lg p-8 text-center hover:border-slate-300 transition-colors cursor-pointer"
//                                         onDragOver={handleDragOver}
//                                         onDrop={handleDrop}
//                                         onClick={() => document.getElementById('file-upload')?.click()}
//                                     >
//                                         <input
//                                             id="file-upload"
//                                             type="file"
//                                             multiple
//                                             accept=".pdf,.docx,.jpg,.jpeg,.png"
//                                             onChange={handleFileChange}
//                                             className="hidden"
//                                         />
//                                         <Upload className="w-8 h-8 text-slate-300 mx-auto mb-2" />
//                                         <p className="text-[#E2E8F0] mb-1">Click to upload or drag and drop</p>
//                                         <p className="text-slate-400 text-sm">PDF, DOCX, JPG (max 10MB total)</p>
//                                         {uploadedFiles.length > 0 && (
//                                             <p className="text-green-400 text-sm mt-2">
//                                                 {uploadedFiles.length} file(s) selected: {uploadedFiles.join(', ')}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Terms Checkbox */}
//                                 <div className="flex items-start gap-2">
//                                     <Checkbox id="terms"/>
//                                     <label htmlFor="terms" className="text-[#CAD5E2] text-sm cursor-pointer">
//                                         I confirm I am licensed counsel and accept the{' '}
//                                         <span className="text-baseBg">terms & privacy policy</span>.
//                                     </label>
//                                 </div>

//                                 {/* Submit Button */}
//                                 <Button className="w-full bg-baseBg hover:bg-orange-500 text-white font-medium text-sm md:text-base cursor-pointer">
//                                     Submit Case Review Request
//                                 </Button>

//                                 {/* Footer Note */}
//                                 <p className="text-[#C4CDD5] text-xs text-center">
//                                     Submitted materials are treated as attorney work product and held in strict confidence.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Wrapper>
//         </div>
//     );
// };

// export default RequestCase;