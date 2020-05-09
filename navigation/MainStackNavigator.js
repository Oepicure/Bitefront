import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListsScreen from '../screens/ListsScreen'
import ListScreen from '../screens/ListScreen'
import ReviewScreen from '../screens/ReviewScreen'
import RestaurantScreen from '../screens/RestaurantScreen'
import RestaurantPhoto from '../screens/RestaurantPhoto'
import RestaurantMenu from '../screens/RestaurantMenu'
import RestaurantReviews from '../screens/RestaurantReviews'
import RestaurantFind from '../screens/RestaurantFind'
import SearchScreen from '../screens/SearchScreen'
import CreateScreen from '../screens/CreateScreen'
import NewList from '../screens/NewList'
import NewReview from '../screens/NewReview'
import PreviewNew from '../screens/PreviewNew'
import NewsScreen from '../screens/NewsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ProfilePosts from '../screens/ProfilePosts'
import ProfileAbout from '../screens/ProfileAbout'
import ProfileScore from '../screens/ProfileScore'


const Stack = createStackNavigator();

export const ListsNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen 
            name="Lists" 
            component={ListsScreen}
            options= {() => ({
                headerShown: false
            })}
            />
            <Stack.Screen 
            name="List" 
            component={ListScreen}
            options= {() => ({
                headerShown: false
            })}
            />
            <Stack.Screen 
            name="Review" 
            component={ReviewScreen}
            options= {() => ({
                headerShown: false,
                animationEnabled: false
            })}
            />

            <Stack.Screen 
            name="Restaurant" 
            component={RestaurantScreen}
            options= {() => ({
                headerShown: false,
                animationEnabled: false
            })}
            />

            <Stack.Screen 
            name="RestaurantPhoto" 
            component={RestaurantPhoto}
            options= {() => ({
                headerShown: false,
                animationEnabled: false
            })}
            />

            <Stack.Screen 
            name="RestaurantMenu" 
            component={RestaurantMenu}
            options= {() => ({
                headerShown: false,
                animationEnabled: false
            })}
            />

            <Stack.Screen 
            name="RestaurantReviews" 
            component={RestaurantReviews}
            options= {() => ({
                headerShown: false,
                animationEnabled: false
            })}
            />

            <Stack.Screen 
            name="RestaurantFind" 
            component={RestaurantFind}
            options= {() => ({
                headerShown: false,
                animationEnabled: false
            })}
            />
        </Stack.Navigator>
    );
}

export const SearchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Search" 
                component={SearchScreen}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
        </Stack.Navigator>
    );
}

export const CreateNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen 
                name="Create" 
                component={CreateScreen}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />

            <Stack.Screen 
                name="NewList" 
                component={NewList}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
            <Stack.Screen 
                name="NewReview" 
                component={NewReview}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
            <Stack.Screen 
                name="PreviewNew" 
                component={PreviewNew}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
        </Stack.Navigator>
    );
}

export const NewsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="News" 
                component={NewsScreen}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
        </Stack.Navigator>
    );
}

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator
        //initialRouteName="ProfileScore"

        >
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
            <Stack.Screen 
                name="ProfilePosts" 
                component={ProfilePosts}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
            <Stack.Screen 
                name="ProfileAbout" 
                component={ProfileAbout}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
            <Stack.Screen 
                name="ProfileScore" 
                component={ProfileScore}
                options= {() => ({
                    headerShown: false,
                    animationEnabled: false
                })}
                />
        </Stack.Navigator>
    );
}