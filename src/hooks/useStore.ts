import { PageSection } from 'types';
import create from 'zustand';
import { combine } from 'zustand/middleware';

type InitialState = {
  currentPageId: string | undefined;
  pageSections: PageSection[];
  isSidebarOpen: boolean;
};

type SetState = {
  setCurrentPageId: (pageId: string) => void;
  setPageSections: (pageSections: PageSection[]) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const useStore = create(
  combine<InitialState, SetState>(
    {
      currentPageId: undefined,
      pageSections: [],
      isSidebarOpen: false,
    },
    (set) => ({
      setCurrentPageId: (currentPageId) => set(() => ({ currentPageId })),
      setPageSections: (pageSections) => set(() => ({ pageSections })),
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      closeSidebar: () => set(() => ({ isSidebarOpen: false })),
    })
  )
);
