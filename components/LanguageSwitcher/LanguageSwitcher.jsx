"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { bypassInterceptingRoute } from "./utils";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    /* let path = pathname;
    if (pathname.includes(selectedLanguage.code)) {
      path = pathname.replace(selectedLanguage.code, lang);
    } */
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowMenu(false);
    const remainingPathName = pathname?.split("/").slice(2).join("/");
    // console.log(remainingPathName);

    const url = `/${lang}/${remainingPathName}`;
    bypassInterceptingRoute(url);
    // router.refresh();
  };

  useEffect(() => {
    languages.find((lang) => pathname.includes(lang.code));
    setSelectedLanguage(found ?? languages[0]);
  }, [pathname]);

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          {/* <Image
            className="max-w-8"
            src="/bd.png"
            alt="bangla"
            height={100}
            width={165}
          /> */}
          {selectedLanguage.language}
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 text-gray-950"
              >
                {/* <Image
                  className="max-w-8"
                  src="/bd.png"
                  alt="bangla"
                  height={100}
                  width={165}
                /> */}
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
