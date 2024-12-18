import React, { useEffect, useState } from 'react';
import { getCareGiverOne } from "@/api/caregiverAPI.js";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";

const init = {
    list: []
};

function CommonDetailComponent({ isOpen, onClose, no, refresh, detailFn, setEditRight, updateFn, editRight }) {
    const [data, setData] = useState(init);
    const [modalOpen, setModalOpen] = useState(false);

    if (!isOpen) return null; // 모달이 열려 있을 때만 렌더링

    useEffect(() => {
        if (no) {
            detailFn(no).then(response => {
                setData({ list: [response] }); // 응답을 list 배열에 래핑
                console.log('------------');
                console.log(response);
            }).catch(error => {
                console.error("API 호출 오류:", error);
            });
        }
    }, [no]);

    // 입력 필드 변경 핸들러
    const handleChange = (index, key, value) => {
        setData(prevData => {
            const updatedList = [...prevData.list]; // 기존 리스트 복사
            updatedList[index] = { ...updatedList[index], [key]: value }; // 수정할 필드만 업데이트
            return { list: updatedList };
        });
    };

    const updateDetail = () => {
      
        const keys = Object.keys(data.list[0]);
        const firstKey = keys.length > 0 && keys[0].slice(-2) === no.toString() ? keys[0] : null;

        const updatedItem = { ...data.list[0] }; // 기존 객체 복사
        if(firstKey != null)    delete updatedItem[firstKey]; // 첫 번째 키-값 쌍 삭

        const jsonData = JSON.stringify(updatedItem);
        console.log(jsonData);
        updateFn(no, jsonData).then(response => {
            console.log("업데이트 성공:", response);
            setModalOpen(false);
            onClose();
            refresh();
        });
    };

    const handleUpdate = () => {

        setModalOpen(true);
        console.log(modalOpen);
    }

    const handleClose = () => {
        setEditRight(false);
        console.log(editRight);
        onClose();
    }



    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            {modalOpen && <CommonCheckModalComponent
                isModalOpen={modalOpen}
                ClickCloseModal={() => setModalOpen(false)}
                editRight={editRight}
                setEditRight ={setEditRight}
                editFn={updateDetail}
            ></CommonCheckModalComponent>}

            {/* 오버레이 */}
            <div className="fixed inset-0 bg-black opacity-50"></div>

            {/* 모달 콘텐츠 */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md z-10 p-6 relative">
                {/* 모달 닫기 버튼 */}
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick = {() => handleClose()}
                >
                    &times;
                </button>

                {/* 모달 폼 */}
                {data.list.map((item, index) => (
                    <div key={index}>
                        {Object.entries(item).map(([key, value]) => (
                            <label key={key} className="block text-sm mb-4">
                                <span className="text-gray-700">{key}:</span>
                                <input
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400"
                                    placeholder="Input"
                                    value={value || ''} // null일 경우 빈 문자열
                                    onChange={(e) => handleChange(index, key, e.target.value)}
                                />
                            </label>

                        ))}
                    </div>
                ))}

                <div className="flex justify-end mt-6 space-x-4">

                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-150"
                        onClick={() => {handleUpdate();
                           }}
                    >
                        수정
                    </button>

                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-150"
                        onClick = {() => handleClose()}
                    >
                        닫기
                    </button>

                </div>
            </div>
        </div>
    );
}

export default CommonDetailComponent;
