import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: Verification par l'OPT | Modèle du Passkey */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[500px]">
          <div className="flex justify-center items-center space-x-2 mb-6">
          <Image src="/assets/icons/logo-icon.svg" height={1000} width={1000} alt={"patient"} className="cursor-pointer  h-10 w-fit object-contain" />
          <h3 className="flex cursor-pointer items-center text-lg font-bold">
          <span className="text-blue-400 ">wang</span>
          <span className="text-green-400 ">anga</span></h3>
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2024 wanganga</p>
            <Link href="/?admin=true" className="text-green-500">Admin</Link>
          </div>
        </div>
      </section>
      <Image src="/assets/images/Afri1.jpg" alt={"patient"} width={1000} height={1000} className="side-img max-w-[50%] mix-blend-overlay"/>
    </div>
  );
}
