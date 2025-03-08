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
            <div className="flex md:justify-end">
                <div className="hidden md:block">
                    <SelectDropdown labelPlace="left" title="Sort By" items={[
                        'Latest Added',
                        'Earliest Added',
                        'Cheapest First',
                        'Highest Price',
                        'Most Expensive',
                    ]}/>
                </div>
                <div className="md:hidden flex gap-2 mt-2">
                    <button onClick={()=>setOpen(0)} className="btn-icon">
                        <IoFilter/>
                        <h4 className="font-medium">Filter</h4>
                    </button>
                    <button onClick={()=>setOpen(1)} className="btn-icon">
                        <AiOutlineSwap className="-rotate-90"/>
                        <h4 className="font-medium">Sort</h4>
                    </button>
                </div>
                <DragCloseDrawer open={open == 0} setOpen={setOpen}>
                    <div className="flex flex-col h-full justify-between">
                        {selected=='Product'?<GroupProduct/>:<GroupArticle/>}
                        <button className="btn w-full">
                            Apply
                        </button>
                    </div>
                </DragCloseDrawer>
                <DragCloseDrawer open={open == 1} setOpen={setOpen}>
                    <div>ini sort</div>
                </DragCloseDrawer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {selected=='Product'?
                Products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <ProductCard {...product} />
                </Link>
                )):
                    Articles.map((article, index) => (
                        <Link href={`/articles/${article.slug}`} key={index}>
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
        <div>
            <h4>Select Dimension</h4>
            <CheckBox title="3D"/>
            <CheckBox title="2D"/>
            <h4>Select Condition</h4>
            <CheckBox title="Like New"/>
            <CheckBox title="Very Good"/>
            <CheckBox title="Good"/>
            <CheckBox title="Needs Improvemont"/>
        </div>
    )
 }

 const GroupArticle = () => {
    return (
        <div>
            <h4>Category</h4>
            <CheckBox title="3D"/>
            <CheckBox title="2D"/>
            <h4>Content Type</h4>
            <CheckBox title="Like New"/>
            <CheckBox title="Very Good"/>
            <CheckBox title="Good"/>
            <CheckBox title="Needs Improvemont"/>
        </div>
    )
 }

export default ExplorePage