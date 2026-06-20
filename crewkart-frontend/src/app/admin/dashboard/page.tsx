
"use client";

import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import ProtectedRoute from "@/components/layout/ProtectedRoute";

import api from "@/services/api";

export default function AdminDashboard() {

  const [bookings, setBookings] =
    useState<any[]>([]);

  const [crews, setCrews] =
    useState<any[]>([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      const response =
        await api.get(
          "/bookings/all"
        );

      setBookings(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  const fetchCrew = async (
    city: string
  ) => {

    try {

      const response =
        await api.get(
          `/crew/available/${city}`
        );

      setCrews(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  const assignCrew = async (
    bookingId: string,
    crewId: string
  ) => {

    try {

      await api.put(
        "/crew/assign",
        {
          bookingId,
          crewId,
        }
      );

      alert(
        "Crew Assigned"
      );

      fetchBookings();

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <ProtectedRoute>

      <DashboardLayout
        title="Admin Dashboard"
      >

        <div className="grid gap-5">

          {bookings.map(
            (booking) => (

              <div
                key={booking._id}
                className="rounded-3xl bg-white p-6 shadow-md"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-[#004643]">
                    {booking.service}
                  </h3>

                  <span className="rounded-full bg-[#fbbf24]/20 px-4 py-2 text-sm font-semibold text-[#004643]">
                    {booking.status}
                  </span>

                </div>

                <p className="mt-4 text-gray-600">
                  {booking.city}
                </p>

                <p className="mt-2 text-gray-600">
                  {booking.location}
                </p>

                <button
                  onClick={() =>
                    fetchCrew(
                      booking.city
                    )
                  }
                  className="mt-6 rounded-xl bg-[#004643] px-5 py-3 text-white"
                >
                  Find Crew
                </button>

                {/* Crew List */}
                <div className="mt-6 grid gap-3">

                  {crews.map(
                    (crew) => (

                      <div
                        key={crew._id}
                        className="flex items-center justify-between rounded-2xl border p-4"
                      >

                        <div>

                          <h4 className="font-bold text-[#004643]">
                            {crew.name}
                          </h4>

                          <p className="text-sm text-gray-600">
                            {crew.city}
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            assignCrew(
                              booking._id,
                              crew._id
                            )
                          }
                          className="rounded-xl bg-[#fbbf24] px-5 py-3 font-semibold text-[#004643]"
                        >
                          Assign
                        </button>

                      </div>
                    )
                  )}

                </div>

              </div>
            )
          )}

        </div>

      </DashboardLayout>

    </ProtectedRoute>
  );
}

