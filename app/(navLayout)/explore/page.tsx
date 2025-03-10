'use client'
import { forestGreen } from "@/color"
import { ArticleCard } from "@/components/articles"
import { CheckBox, Chip, SelectDropdown } from "@/components/atoms"
import { DragCloseDrawer } from "@/components/molecules"
import { NavbarDashboard } from "@/components/organism"
import { ProductCard } from "@/components/products"
import { Articles } from "@/data"
import { Products } from "@/data/products"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import { IconType } from "react-icons"
import { AiOutlineSwap } from "react-icons/ai"
import { IoFilter, IoNewspaper, IoNewspaperOutline, IoShirt, IoShirtOutline } from "react-icons/io5"

const ExplorePage = () => { 
    const tabs = [
        {
            title : 'Product',
            iconDefault : <IoShirtOutline size={25} color="black"/>,
            iconActive : <IoShirt size={25} color={forestGreen}/>
        },
        {
            title : 'Article',
            iconDefault : <IoNewspaperOutline size={25} color="black"/>,
            iconActive : <IoNewspaper size={25} color={forestGreen}/>
        },
    ];
    const [selected, setSelected] = useState(tabs[0].title);
    
    return (
        <>
            <NavbarDashboard/>
            <main className="pb-16 w-11/12 mx-auto">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-8">
                    <div className="h-fit hidden md:block md:sticky top-24">
                        <div>
                            <h2 className="text-lg font-semibold">Filter</h2>
                            {selected=='Product'?<GroupProduct/>:<GroupArticle/>}
                        </div>
                    </div>
                    <div className="pt-24">
                        <MainSection selected={selected} setSelected={setSelected} tabs={tabs}/>
                    </div>
                </div>
            </main>
        </>
    )
 }

 const MainSection = ({
    selected,
    setSelected,
    tabs
 }:{
    selected : string;
    setSelected : Dispatch<SetStateAction<string>>;
    tabs : {
        title : string
        iconDefault : React.ReactElement<IconType>
        iconActive : React.ReactElement<IconType>
    }[]
 }) => { 
     const [open, setOpen] = useState<null|number>(null)
    return (
        <>
            <div className="flex">
                {tabs.map((tab) => (
                    <Chip
                    type="bar"
                    text={tab.title}
                    selected={selected === tab.title}
                    setSelected={setSelected}
                    key={tab.title}
                    iconActive={tab.iconActive}
                    iconDefault={tab.iconDefault}
                    />
                ))}
            </div>
            <div className="flex justify-between items-center mt-4 md:mt-6">
                <h2 className="text-xl font-semibold hidden md:block">All {selected}s</h2>
                <div className="hidden md:block">
                    {selected=='Product'?<SelectDropdown 
                        labelPlace="left" 
                        title="Sort By" 
                        items={[
                            'Latest Added',
                            'Earliest Added',
                            'Cheapest First',
                            'Highest Price',
                            'Most Expensive',
                        ]}
                    />:
                    <SelectDropdown 
                    labelPlace="left" 
                    title="Sort By" 
                    items={[
                        'Latest Added',
                        'Earliest Added',
                    ]}
                />
                    }
                </div>
                <div className="md:hidden flex gap-3 w-full">
                    <button onClick={()=>setOpen(0)} className="flex-1 py-2 px-4 bg-gray-100 rounded-lg flex items-center justify-center gap-2">
                        <IoFilter size={18}/>
                        <span className="font-medium">Filter</span>
                    </button>
                    <button onClick={()=>setOpen(1)} className="flex-1 py-2 px-4 bg-gray-100 rounded-lg flex items-center justify-center gap-2">
                        <AiOutlineSwap className="-rotate-90" size={18}/>
                        <span className="font-medium">Sort</span>
                    </button>
                </div>
                <DragCloseDrawer open={open == 0} setOpen={setOpen}>
                    <div className="flex flex-col h-full justify-between p-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Filter {selected}s</h3>
                            {selected=='Product'?<GroupProduct/>:<GroupArticle/>}
                        </div>
                        <button className="btn w-full bg-green-600 text-white py-3 rounded-lg font-medium mt-4">
                            Apply Filters
                        </button>
                    </div>
                </DragCloseDrawer>
                <DragCloseDrawer open={open == 1} setOpen={setOpen}>
                    <div className="p-4 h-full flex-col flex justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Sort By</h3>
                            <div className="flex flex-col gap-3">
                                {selected=='Product'?['Latest Added', 'Earliest Added', 'Cheapest First', 'Highest Price', 'Most Expensive'].map((item, index) => (
                                    <button 
                                        key={index} 
                                        className="text-left py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                                        onClick={() => {
                                            setOpen(null);
                                        }}
                                    >
                                        {item}
                                    </button>
                                )):
                                ['Latest Added', 'Earliest Added'].map((item, index) => (
                                    <button 
                                        key={index} 
                                        className="text-left py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                                        onClick={() => {
                                            setOpen(null);
                                        }}
                                    >
                                        {item}
                                    </button>
                                ))
                                }
                            </div>
                        </div>
                            <button className="btn w-full bg-green-600 text-white py-3 rounded-lg font-medium mt-4">
                                Apply Filters
                            </button>
                    </div>
                </DragCloseDrawer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {selected=='Product'?
                Products.map((product) => (
                <Link href={'/products/1'} key={product.id}> 
                    <ProductCard {...product} />
                </Link>
                )):
                    Articles.map((article, index) => (
                        <Link href={'/articles/environmental-impact-fast-fashion'} key={index}>
                            <ArticleCard
                                title={article.title}
                                description={article.description}
                                image={article.image}
                                date={article.date}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    )
  }

 const GroupProduct = () => {
    return (
        <div className="space-y-4">
            <div className="border-b pb-3">
                <h4 className="font-medium mb-2">Dimension</h4>
                <div className="space-y-2">
                    <CheckBox title="3D"/>
                    <CheckBox title="2D"/>
                </div>
            </div>
            <div className="border-b pb-3">
                <h4 className="font-medium mb-2">Condition</h4>
                <div className="space-y-2">
                    <CheckBox title="New"/>
                    <CheckBox title="Like New"/>
                    <CheckBox title="Very Good"/>
                    <CheckBox title="Good"/>
                    <CheckBox title="Gently Used"/>
                </div>
            </div>
        </div>
    )
 }

 const GroupArticle = () => {
    return (
        <div className="space-y-4">
            <div className="border-b pb-3">
                <h4 className="font-medium mb-2">Category</h4>
                <div className="space-y-2">
                    <CheckBox title="Sustainability"/>
                    <CheckBox title="Fashion"/>
                </div>
            </div>
            <div className="border-b pb-3">
                <h4 className="font-medium mb-2">Content Type</h4>
                <div className="space-y-2">
                    <CheckBox title="Blog"/>
                    <CheckBox title="News"/>
                    <CheckBox title="Tutorial"/>
                    <CheckBox title="Review"/>
                </div>
            </div>
        </div>
    )
 }

export default ExplorePage