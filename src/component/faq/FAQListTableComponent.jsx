import { useEffect, useState } from "react";
import { getFAQList } from "../../api/faqAPI";

const init = {
    list: []
};

function FAQListTableComponent({ selectedCategory }) {
    const [faq, setFaq] = useState(init);

    // FAQ API 가져오기
    useEffect(() => {
        const loadFAQData = async () => {
            try {
                const data = await getFAQList();
                setFaq({ list: data });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        loadFAQData(); // 컴포넌트가 마운트될 때 FAQ 목록을 가져옵니다.
    }, []);

    // 선택된 카테고리만 보이게 하기
    const seletedFaqList = faq.list.filter((item) => {
        return selectedCategory === "" || item.fcategory === selectedCategory;
    });

    // fcategory값을 텍스트로 출력하기
    const changeCategoryOutput = (fcategory) => {
        if (fcategory === "1") {
            return "간병인";
        } else if (fcategory === "2") {
            return "보호자/피보호자";
        } else {
            return "기타";
        }
    };

    return (
        <table className="w-full whitespace-no-wrap">
            <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400">
                <th className="px-4 py-3">카테고리</th>
                <th className="px-4 py-3">FAQ 제목</th>
                <th className="px-4 py-3">수정/삭제</th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {seletedFaqList.length === 0 ? (
                <tr>
                    <td colSpan="3" className="px-4 py-3 text-center text-gray-500">
                        해당하는 FAQ가 없습니다
                    </td>
                </tr>
            ) : (
                seletedFaqList.map((item) => (
                    <tr key={item.fno} className="text-gray-700 dark:text-gray-400 uppercase border-b dark:border-gray-700">
                        <td className="px-4 py-3 w-1/6 text-sm">{changeCategoryOutput(item.fcategory)}</td>
                        <td className="px-4 py-3 w-4/6 text-sm font-bold">{item.ftitle}</td>
                        <td className="px-4 py-3 w-1/6">
                            <div className="flex items-center space-x-4 text-sm">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Edit"
                                    onClick={() => console.log(`수정을 클릭한 FAQ NO. ${item.fno}`)}
                                >
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                    </svg>
                                </button>
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Delete"
                                    onClick={() => console.log(`Delete clicked for FAQ ID: ${item.fno}`)}
                                >
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
}

export default FAQListTableComponent;
