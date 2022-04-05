/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'pei-documents',
        title: 'Documenti',
        subtitle: 'Gestisci PEI',
        type: 'basic',
        icon: 'heroicons_outline:cog',
        link: '/pei-documents'
    }
];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;
export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
