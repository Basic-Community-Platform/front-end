import { Inter } from "next/font/google"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const inter = Inter({ subsets: ["latin"] })

const carouselImgList = ["nature.jpg", "trees.jpg", "warnemunde.jpg"].map((img) => "/carousel/" + img)

export default function Home() {
	return (
		<main className={inter.className + " flex h-full w-screen items-start justify-center py-16"}>
			<Carousel className="w-full bg-blue-100">
				<CarouselContent>
					{Array.from({ length: carouselImgList.length }).map((_, index) => (
						<CarouselItem key={index}>
							<Image src={carouselImgList[index]} alt="banner" width={500} height={300} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</main>
	)
}
