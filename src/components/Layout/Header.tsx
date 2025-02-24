import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGithub, SiWantedly, SiZenn } from 'react-icons/si';

export const Header = () => {
  return (
    <header className="bg-main/90 w-full sticky top-0 h-16 flex items-center justify-between px-8">
      <Link href={'/'} className="text-2xl font-medium text-white" scroll>
        エンジョニア
      </Link>
      <div className="flex gap-4 items-center ">
        <div className="hidden md:flex lg:flex xl:flex">
          <a href="#" className="p-4" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://github.com/Keigo-Hirohara"
            className="p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://www.wantedly.com/id/keigo_hirohara"
            className="p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWantedly className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://zenn.dev/keigo_hirohara"
            className="p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiZenn className="h-6 w-6 text-white" />
          </a>
          <Link
            href={'/articles'}
            className="text-md font-medium text-white p-4"
            scroll
          >
            全記事一覧
          </Link>
        </div>
        <div className="md:hidden lg:hidden xl:hidden">
          <label className="relative z-40 cursor-pointer px-3 py-6">
            <input className="peer hidden" type="checkbox" id="mobile-menu" />
            <div className="relative z-50 block h-[1px] w-7 bg-white bg-transparent content-[''] before:absolute before:top-[-0.5rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.5rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform before:peer-checked:bg-black after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform after:peer-checked:bg-black"></div>
            <div className="fixed inset-0 z-40 hidden h-full w-full bg-white/50 backdrop-blur-sm peer-checked:block">
              &nbsp;
            </div>
            <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
              <div className="float-right min-h-full w-[75%] bg-white px-6 pt-12 shadow-2xl">
                <menu className="flex flex-col gap-4">
                  <li>
                    <Link href={'/'} scroll>
                      トップ
                    </Link>
                  </li>
                  <li>
                    <Link href={'/articles/1'} scroll>
                      全記事一覧
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="h-6 w-6 text-black" />
                      <p>X</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Keigo-Hirohara"
                      className="flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub className="h-6 w-6 text-black" />
                      <p>GitHub</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.wantedly.com/id/keigo_hirohara"
                      className="flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWantedly className="h-6 w-6 text-black" />
                      <p>Wantedly</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zenn.dev/keigo_hirohara"
                      className="flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiZenn className="h-6 w-6 text-black" />
                      <p>Zenn</p>
                    </a>
                  </li>
                </menu>
              </div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};
