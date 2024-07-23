/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPlaceDetails } from "@/service/globalApi";
import { useCallback, useEffect, useState } from "react";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

const usePlacePhoto = (name: string) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const fetchPlacePhoto = useCallback(async () => {
    const data = {
      textQuery: name,
    };
    await getPlaceDetails(data).then((resp) => {
      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(photoUrl);
    });
  }, [name]);

  useEffect(() => {
    fetchPlacePhoto();
  }, [fetchPlacePhoto]);

  return photoUrl;
};

export default usePlacePhoto;
