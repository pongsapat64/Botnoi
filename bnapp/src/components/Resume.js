import React from 'react';
import profileImage from './img/Frank.jpg';

function Resume() {
  return (
    <div className="min-h-screen bg-blue-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2">
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">นายพงศพัศ ชนะกุล</h2>
                <h3 className="text-1xl sm:text-2xl font-bold text-blue-500">Pongsapat Chanakul</h3>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-600">เกี่ยวกับฉัน</h3>
              <p>วัน/เดือน/ปี เกิด: 19 / 7 / 2546</p>
              <p>เบอร์โทรศัพท์: +66 62-526-1783</p>
              <p>อีเมล: pongsapat.ch.64@ubu.ac.th</p>
              <p>
                Github: <a href="https://github.com/pongsapat64" className="text-blue-500 underline">Pongsapat</a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-600">มินิโปรเจค</h3>
              <ul className="list-disc ml-5">
                <li>ระบบนัดสอบโครงงาน - Django</li>
                <li>ระบบจัดการร้านอาหารบุฟเฟต์ - React, ExpressJS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600">ประวัติการศึกษา</h3>
              <p className="font-bold">โรงเรียนลือคำหาญวารินชำราบ</p>
              <p>มัธยมศึกษาตอนปลาย (วิทย์ - คณิต)</p>
              <p>GPX: 2.71</p>
              <hr className="h-px my-3 w-[8cm] bg-black border-0 dark:bg-gray-700"/>
              <p className="font-bold">มหาวิทยาลัยอุบลราชธานี</p>
              <p>คณะวิทยาศาสตร์</p>
              <p>สาขาวิทยาการข้อมูลและนวัตกรรมซอฟต์แวร์</p>
              <p>GPX: 2.85</p>
            </div>
          </div>

          <div className="sm:col-span-1">
            <div className="mb-8 flex justify-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl border-4 border-blue-500 shadow-lg"
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-600">ทักษะ</h3>
              <p className="font-bold">PROGRAMMING LANGUAGES</p>
              <ul className="list-disc ml-5">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>dart (พื้นฐาน)</li>
              </ul>
            <br></br>
              <p className="font-bold">FRAMEWORKS & LIBRARIES</p>
              <ul className="list-disc ml-5">
                <li>Django</li>
                <li>React</li>
                <li>Flutter - ระดับพื้นฐาน</li>
                <li>ExpressJS - ระดับพื้นฐาน</li>
                <li>Angular - ระดับพื้นฐาน</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600">ภาษา</h3>
              <ul className="list-disc ml-5">
                <li>ภาษาไทย - ระดับเจ้าของภาษา</li>
                <li>ภาษาอังกฤษ - ระดับกลาง</li>
                <li>ภาษาญี่ปุ่น - ระดับพื้นฐาน</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
