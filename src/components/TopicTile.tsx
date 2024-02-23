import React from "react";
import { Button } from "@nextui-org/react";

interface Props {
  slug: string;
}

    return(<>
                <p className="">{props.slug}</p>
                
                    <div className="mt-4 mb-2 px-20 flex flex-row justify-between">
                      <Button radius="full" size="sm" color="secondary" variant="bordered">Learn More </Button>
                      
                      
                    <Link href={`${props.language}/${props.name}/challenges`}>
                   <Button
              radius="full"
             size="sm"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Challenges
        </Button>
                    </Link>
                </div>
        </>
        )
}

export default TopicTile;
