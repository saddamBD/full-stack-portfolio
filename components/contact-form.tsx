// "use client";

// import Form from "next/form";
// import { type SyntheticEvent, useState } from "react";
// import SubmitButton from "@/components/SubmitButton";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// import { sendEmail } from "@/app/actions";

// export default function Home() {
//   const [state, setState] = useState("ready");
//   const [error, setError] = useState<string>();

//   async function handleOnSubmit(event: SyntheticEvent) {
//     // Submission disabled for demo
//     event.preventDefault();
//     setError("Submission disabled for demo.");
//     return;

//     if (state === "pending") {
//       event.preventDefault();
//       return;
//     }
//     setState("pending");
//   }

//   return (
//     <main className="h-full">
//       {error && (
//         <p className="bg-red-100 text-sm text-red-800 text-center px-3 py-2 rounded-lg mb-6">
//           {error}
//         </p>
//       )}
//       <div className="flex justify-between mb-6">
//         <h1 className="text-3xl font-semibold">Contact Me</h1>
//       </div>

//       <Form
//         action={sendEmail}
//         onSubmit={handleOnSubmit}
//         className="grid gap-4 max-w-xs"
//       >
//         <div>
//           <Label htmlFor="name" className="block font-semibold text-sm mb-2">
//             Name
//           </Label>
//           <Input id="name" name="name" type="text" />
//         </div>
//         <div>
//           <Label htmlFor="email" className="block font-semibold text-sm mb-2">
//             Email
//           </Label>
//           <Input id="email" name="email" type="email" />
//         </div>
//         <div>
//           <Label
//             htmlFor="description"
//             className="block font-semibold text-sm mb-2"
//           >
//             Description
//           </Label>
//           <Textarea id="description" name="description" />
//         </div>
//         <div>
//           <SubmitButton />
//         </div>
//       </Form>
//     </main>
//   );
// }
