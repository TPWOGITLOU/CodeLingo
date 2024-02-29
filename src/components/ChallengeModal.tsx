import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import SpriteAnimator from "./SpriteAnimator";

const ChallengeModal = (): JSX.Element => {
  const { onOpenChange } = useDisclosure();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const params = useParams<{ language: string }>();

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Congratulations!
              </ModalHeader>
              <ModalBody>
                <p>
                  Well done, you have completed all the challenges for this
                  topic!
                </p>

                <SpriteAnimator
                  spriteWidth={256}
                  spriteHeight={256}
                  borderWidth={0}
                  spacingWidth={0}
                  animationCycle={[
                    { x: 0, y: 0 },
                    { x: 256, y: 0 },
                    { x: 512, y: 0 },
                  ]}
                  animationSpeed={200}
                  imageSrc="/trophy.png"
                />
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setIsOpen(false);
                  }}
                >
                  Close
                </Button>
                <Link href={`/${params.language}`}>
                  <Button color="success" onPress={onClose}>
                    Back to topics
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChallengeModal;
