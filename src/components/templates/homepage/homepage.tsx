import { constants } from "../../../constants";
import { MapBarbershop } from "../../molecules/mapBarbershop/mapBarbershop";
import { PictureBarbershop } from "../../organisms/pictureBarbershop/pictureBarbershop";
import { Services } from "../../organisms/services/services";
import { WhatsAppIcon } from "../../molecules/whatsAppIcon/whatsAppIcon";
import { Layout } from "../layout/layout";
import * as S from "./homepage.styles";
import { Section } from "../../molecules/section/section";
import { Flex } from "../../../styles/commonStyles";
import { pictures, services } from "../../../utils/utils";
import { useEffect, useRef } from "react";
import { useHeaderContext } from "../../../context/HeaderContext";

type SectionKey = "services" | "pictures" | "map" | "contact";

export const Homepage = () => {
  const { title, subtitle } = constants;
  const { tab } = useHeaderContext();
  const sectionsRef = useRef<Record<SectionKey, HTMLDivElement | null>>({
    services: null,
    pictures: null,
    map: null,
    contact: null,
  });

  useEffect(() => {
    sectionsRef.current[tab]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [tab]);

  return (
    <Layout title={title} subtitle={subtitle}>
      <Section
        height="650px"
        classname="section-services"
        sectionRef={(el) => (sectionsRef.current.services = el)}
      >
        <h1 style={{ marginTop: 30, fontSize: 50 }}>Nossos Serviços</h1>
        <S.WrapperServices>
          <Services data={services} />
        </S.WrapperServices>
      </Section>
      <Section
        height="800px"
        picture="wallpaperPicture.jpg"
        sectionRef={(el) => (sectionsRef.current.pictures = el)}
      >
        <Flex $display="flex" $flexDirection="column">
          <h1 style={S.defaultStyleInline.pictureText}>Fotos</h1>
          <S.Overlay $rgba="rgba(0, 0, 0, 0.9)" />
          <S.PictureBarbershopWrapper>
            <PictureBarbershop data={pictures} />
          </S.PictureBarbershopWrapper>
        </Flex>
      </Section>

      <Section
        height="600px"
        sectionRef={(el) => (sectionsRef.current.map = el)}
      >
        <Flex $display="flex">
          <MapBarbershop />
          <S.Overlay $rgba="rgba(36, 82, 74, 0.65)" />
          <S.WrapperText>
            <h1>{constants.map.title}</h1>
            <p>{constants.map.address}</p>
            <p>{constants.map.subtitle}</p>
          </S.WrapperText>
        </Flex>
      </Section>
      <Section
        height="200px"
        sectionRef={(el) => (sectionsRef.current.contact = el)}
      >
        <Flex $display="flex">
          <S.WrapperWhatsaapInfo>
            <WhatsAppIcon />
            <h1>{constants.info} - João</h1>
          </S.WrapperWhatsaapInfo>
        </Flex>
      </Section>
    </Layout>
  );
};
