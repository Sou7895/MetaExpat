'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Globe, Search, Star, User } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const router = useRouter();
    return (
        <section className="px-4 lg:px-6 py-8 lg:py-16 lg:my-8 min-h-screen max-w-7xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 lg:space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                        <Globe size={16} />
                        <span className="text-sm lg:text-base">GET FREE PLANS IN 3 STEPS</span>
                    </div>

                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        Plan your <span className="text-blue-600">expatriation</span> the easy way
                    </h1>

                    <div className="space-y-4">
                        {[
                            { icon: Globe, text: "Recieve a detailed and personalied action plan" },
                            { icon: Search, text: "Answer few questions, get your detailed plan" },
                            { icon: User, text: "Trusted by 175K global users with 5K+ reviews" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <item.icon className="text-gray-600 flex-shrink-0" size={20} />
                                <span className="text-sm lg:text-base">{item.text}</span>
                            </div>
                        ))}

                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <Star key={star} className="text-yellow-400 fill-yellow-400" size={20} />
                            ))}
                            <span className="ml-2">5.0</span>
                        </div>
                    </div>

                    <Button className="w-auto px-6 py-3 bg-blue-600 text-white rounded-xl text-lg h-15 hover:bg-blue-700 transition-colors" onClick={()=>{router.push('/action')}}>
                        Get free plan →
                    </Button>
                </div>

                <div className="relative mt-8 lg:mt-0 h-[300px] sm:h-[400px] lg:h-[600px]">
                    <div className="w-full h-full rounded-lg overflow-hidden">
                        <Image
                        style={{clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)", objectFit: 'cover'}}
                            src="/hero.jpg"
                            alt="Moving family"
                            fill
                            className="rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}