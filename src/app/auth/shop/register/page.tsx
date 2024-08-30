'use client';
import { Button, Input } from '@nextui-org/react';
import React, { useState, useCallback } from 'react';
import shopAPI from '../../../../../lib/axios/shop';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const ShopRegister: React.FC = () => {
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [backendError, setBackendError] = useState<string | null>(null);

  const router = useRouter();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCPvqKJigbPJWjWpPcHXQ-c5TxuHTXQaRM", // Replace with your actual Google Maps API Key
  });

  const schema = z.object({
    shopName: z.string().min(1, { message: "Shop name is required" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Confirm password must be at least 6 characters" }),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // field path to display error
  });

  const register = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      schema.parse({ shopName, email, phone, password, confirmPassword });
      setErrors({});
      setBackendError(null);

      // Your API request to register the shop
      shopAPI.post('api/auth/shop-signup', { name: shopName, email, phone, password, confirmPassword, location: { latitude, longitude } })
        .then((res) => {
          console.log(res.data);
          router.push('/shop');
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            setBackendError(err.response.data.message || 'An error occurred');
          } else {
            setBackendError('An error occurred');
          }
          console.log(err);
        });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  const mapContainerStyle = {
    width: "100%",
    height: "87%",
    borderRadius: "10px",
  };

  const center = {
    lat: 10.1632, // Default center location (e.g., San Francisco)
    lng: 76.6413,
  };

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    setLatitude(event.latLng?.lat() || center.lat);
    setLongitude(event.latLng?.lng() || center.lng);
  }, []);

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting geolocation", error);
        }
      );
    } else {
      console.error("Geolocation not supported");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-xl border-1 border-gray-100 dark:border-gray-800 m-2 md:shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop Register</h2>
        <form onSubmit={register}>
          <div className='flex flex-wrap gap-2'>
            <div className='w-full md:w-[48%]'>
              <div className="my-2">
                <Input
                  type="text"
                  label="Shop Name"
                  variant="bordered"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  isInvalid={!!errors.shopName}
                  errorMessage={errors.shopName ? errors.shopName[0] : ''}
                  className="w-full"
                />
              </div>
              <div className="my-2">
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email ? errors.email[0] : ''}
                  className="w-full"
                />
              </div>
              <div className="my-2">
                <Input
                  type="text"
                  label="Phone"
                  variant="bordered"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone ? errors.phone[0] : ''}
                  className="w-full"
                />
              </div>
              <div className="my-2">
                <Input
                  type="password"
                  label="Password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password ? errors.password[0] : ''}
                  className="w-full"
                />
              </div>
              <div className="my-2">
                <Input
                  type="password"
                  label="Confirm Password"
                  variant="bordered"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  isInvalid={!!errors.confirmPassword}
                  errorMessage={errors.confirmPassword ? errors.confirmPassword[0] : ''}
                  className="w-full"
                />
              </div>
            </div>
            {isLoaded && !loadError && (
              <div className='my-2 w-full md:w-1/2 min-h-[300px]'>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={10}
                  center={latitude && longitude ? { lat: latitude, lng: longitude } : center}
                  onClick={onMapClick}
                >
                  {latitude && longitude && <Marker position={{ lat: latitude, lng: longitude }} draggable={true} onDragEnd={onMapClick} />}
                </GoogleMap>
                <Button onPress={handleCurrentLocation} size='sm' variant='ghost' className="w-full mt-2">
                  Use Current Location
                </Button>
              </div>
            )}
          </div>
          {/* {latitude && longitude && (
            <p className="text-center my-2">
              Selected Location: Lat: {latitude}, Long: {longitude}
            </p>
          )} */}
          {backendError && (
            <div className="my-2 text-red-500 text-center">
              {backendError}
            </div>
          )}
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
            Register
          </Button>
        </form>
        <p className="text-center text-sm my-2">
          <a href="/auth/shop/">I have an account. Login</a>
        </p>
      </div>
    </div>
  );
};

export default ShopRegister;
