'use client';
import { DataTable } from '@/components/common/DataTable';
import { ExData } from '@/constant/data';
import { languageAtom } from '@/store/atom';
import { CardType, LanguageType } from '@/types/types';
import { ColumnDef } from '@tanstack/react-table';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

const testCol = (lang: LanguageType): ColumnDef<CardType>[] => [
  {
    accessorKey: 'title',
    header: '프로젝트',
    cell: ({ row: { original } }) => {
      return <p className="min-w-60">{original.title[lang]}</p>;
    },
  },
  {
    accessorKey: 'company',
    header: '주관사',
    cell: ({ row: { original } }) => {
      return <p className="min-w-28">{original.company[lang]}</p>;
    },
  },
  {
    accessorKey: 'content',
    header: '설명',
    cell: ({ row: { original } }) => <p>{original.content[lang]}</p>,
  },
  {
    accessorKey: 'sdate',
    header: () => (
      <p className="text-center">{lang == 'ko' ? '기간' : 'period'}</p>
    ),
    cell: ({ row: { original } }) => (
      <p className="min-w-40 text-center">
        {original.sdate} - {original.edate}
      </p>
    ),
  },
];

export default function Page() {
  const lang = useAtomValue(languageAtom);
  const router = useRouter();
  const reverseData = [...ExData].reverse();

  return (
    <section className="flex flex-col mt-40">
      <div className="flex items-center p-2">
        <p>개발중인 페이지입니다.</p>
        <button onClick={() => router.back()} className="ml-10 p-2 border">
          뒤로가기
        </button>
      </div>
      <div className="items-center justify-center border p-4">
        <DataTable data={reverseData} columns={testCol(lang)} />
      </div>
    </section>
  );
}
