import { withTranslation } from "react-i18next";

 function AddMeetingsFormComponent({ t }) {
   return (
     <form className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
       <div className="space-y-12 sm:space-y-16">
         <div>
           <h2 className="text-base font-semibold leading-7 text-gray-900">
             Meeting Information
           </h2>
           <p className="max-w-2xl mt-1 text-sm leading-6 text-gray-600">
             Use a permanent data.
           </p>

           <div className="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
               <label
                 htmlFor="first-name"
                 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
               >
                 Title
               </label>
               <div className="mt-2 sm:col-span-2 sm:mt-0">
                 <input
                   type="text"
                   name="first-name"
                   id="first-name"
                   autoComplete="given-name"
                   className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
               <label
                 htmlFor="about"
                 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
               >
                 Description
               </label>
               <div className="mt-2 sm:col-span-2 sm:mt-0">
                 <textarea
                   id="about"
                   name="about"
                   rows={3}
                   className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   defaultValue={""}
                 />
                 <p className="mt-3 text-sm leading-6 text-gray-600">
                   Write a few sentences about department.
                 </p>
               </div>
             </div>

             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
               <label
                 htmlFor="first-name"
                 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
               >
                 Meeting link
               </label>
               <div className="mt-2 sm:col-span-2 sm:mt-0">
                 <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-2xl">
                   <span className="flex items-center pl-3 text-gray-500 select-none sm:text-sm">
                     http://
                   </span>
                   <input
                     type="text"
                     name="website"
                     id="website"
                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                     placeholder="www.example.com"
                   />
                 </div>
               </div>
             </div>
             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
               <label
                 htmlFor="first-name"
                 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
               >
                 Start time
               </label>
               <div className="mt-2 sm:col-span-2 sm:mt-0">
                 <input
                   type="text"
                   name="first-name"
                   id="first-name"
                   autoComplete="given-name"
                   className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="DD/MM/YYYY"
                   onChange={(e) => console.log(e.target.value)}
                   onFocus={(e) => (e.target.type = "date")}
                   onBlur={(e) => (e.target.type = "text")}
                 />
               </div>
             </div>
             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
               <label
                 htmlFor="first-name"
                 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
               >
                 End time
               </label>
               <div className="mt-2 sm:col-span-2 sm:mt-0">
                 <input
                   type="number"
                   name="first-name"
                   id="first-name"
                   autoComplete="given-name"
                   className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="DD/MM/YYYY"
                   onChange={(e) => console.log(e.target.value)}
                   onFocus={(e) => (e.target.type = "date")}
                   onBlur={(e) => (e.target.type = "text")}
                 />
               </div>
             </div>
           </div>
         </div>
       </div>

       <div className="flex items-center justify-end mt-6 gap-x-6">
         <button
           type="button"
           className="text-sm font-semibold leading-6 text-gray-900"
         >
           Cancel
         </button>
         <button
           type="submit"
           className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
           Save
         </button>
       </div>
     </form>
   );
 }
export default withTranslation()(AddMeetingsFormComponent);