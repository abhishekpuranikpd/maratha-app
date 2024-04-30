"use client"
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PoetNav from "../components/poetnav";
import Heading from "@/components/ui/heading";

import { WhatsappShareButton, WhatsappIcon } from "next-share";

const SinglePoetView = ({ singlepoetdata }) => {
  return (
    <>
      <div
        className="w-full rounded-lg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
        }}
      >
        <div className="">
          <div className="rounded-lg w-full shadow-md overflow-hidden">
           
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    {/* Image */}
                    <div className="p-4 md:pl-24 flex justify-center md:justify-start items-center">
                      <Avatar className="h-36 w-36 border border-white shadow-lg">
                        <AvatarImage src={singlepoetdata.image || undefined} />
                        <AvatarFallback className="text-4xl">
                          {singlepoetdata.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="p-2 md:pt-10">
                    {/* Name */}
                    <h2 className="text-3xl font-semibold text-center md:text-start text-white shadow-lg mb-2">
                      {singlepoetdata.name}  <span>
                    <WhatsappShareButton
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${singlepoetdata.id}`}
                      title={`${singlepoetdata.name}"The Poet From The Kavitva Site"`}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </span>
                    </h2>
                    {/* Location */}
                    <p className="text-white text-center md:text-start mb-2">
                      {singlepoetdata.location}
                    </p>
                    {/* Born & Died Dates */}
                    <div className="flex items-center text-white justify-center mb-4">
                      <span className="mr-2">
                        {singlepoetdata.borndate
                          ? new Date(singlepoetdata.borndate).toLocaleDateString()
                          : "Unknown"}
                      </span>
                      <span>
                        -{" "}
                        {singlepoetdata.dieddate
                          ? new Date(singlepoetdata.dieddate).toLocaleDateString()
                          : "Present"}{" "}
                        | {singlepoetdata.gender || "Unknown"}
                      </span>
                    </div>
                  </div>
                </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SinglePoetView;
