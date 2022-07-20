export interface Resume {
  owner: string
  title: string
  label: string
  role: string
  location: string
  email: string
  linkedin: string
  github: string
  education?: Details[]
  experience?: Details[]
  skills?: Skill[]
  tools?: Skill[]
  references?: Skill[]
  projects?: Details[]
}

export interface Details {
  label: string
  location: string
  notes: string[]
  start?: string
  end?: string
  role?: string
}

export interface Skill {
  notes: string[]
}

export interface Project {
  label: string
  location: string
  notes: string[]
}
